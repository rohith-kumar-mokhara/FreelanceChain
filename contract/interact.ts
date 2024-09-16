import { EventLog, Web3 } from "web3";
//import path from "path";
import fs from "fs";

const web3 = new Web3("http://127.0.0.1:8545/");

// Read the contract address from the file system
//const deployedAddressPath = path.join(__dirname, "MyContractAddress.txt");
//const deployedAddress = fs.readFileSync(deployedAddressPath, "utf8");
const deployedAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with your contract address
// Create a new contract object using the ABI and address
import abi from "./MyContractAbi.json";
import { error } from "console";
const myContract = new web3.eth.Contract(abi, deployedAddress);
myContract.handleRevert = true;

export const registerFreelance = async(walletAddress:String)=>{
    try{
        const accounts = await web3.eth.getAccounts();
        const account0 = accounts[0];
        const freelanceGuy = await myContract.methods.registerFreelance(walletAddress).send({from:account0});
        console.log(`Freelanced Registed: ${freelanceGuy}`);
    }
    catch(err){
        console.log(err);
    }
}

export const takeUpProject = async (_freeID:number,_ID:number)=>{
    try{
        const accounts = await web3.eth.getAccounts();
        const account0 = accounts[0];
        const takingProject = await myContract.methods.takeUpProject(_freeID,_ID).send({from: account0});
        console.log(`Project Taken!!`);
    }
    catch(err){
        console.log(err);
    }
}

export const createProject = async (amount:number,noOfMilestones:number,description: string)=>{
    try{
        const accounts = await web3.eth.getAccounts();
        const account0 = accounts[0];
        const creating = await myContract.methods.createProject(amount,noOfMilestones,description).send({from:account0});
        console.log(`Created Project!!`);
    }
    catch(err){
        console.log(err);
    }
}

export const getProjects  = async () :Promise<any[]> =>{
    try{
        const accounts = await web3.eth.getAccounts();
        const account0 = accounts[0];
        const Projs: any[] = await myContract.methods.getProjects().call({from:account0});
        console.log(Projs);
        return Projs;
    }
    catch(err){
        console.log(`Error in getting: ${err}`);
        return [];
    }
}

export const verifyProjectAndPay = async (_ID:number,noOfMilestones:number)=>{
    try{
        const accounts = await web3.eth.getAccounts();
        const account0 = accounts[0];
        const project:string = await myContract.methods.getProjectAmount(_ID).call({from: account0});
        const value:string = project;
        console.log(project);
        const valueInWei = web3.utils.toWei(value.toString(), 'wei');
        console.log(valueInWei);
        const verify = await myContract.methods.verifyProjectAndPay(_ID,noOfMilestones).send({from:account0,value:valueInWei});
        console.log(`Verified Milestones: ${verify}`);
    }
    catch(err){
        console.log(`Error: ${err}`);
    }
}

export const giveRatings = async (_ID:number,rating:number) =>{
    try{
        const accounts = await web3.eth.getAccounts();
        const account0 = accounts[0];
        const ratings = await myContract.methods.giveRatings(_ID,rating).send({from:account0});
        console.log(ratings);
    }
    catch(err){
        console.log(`Error: ${err}`);
    }
}

interface Freelancer {
    projectsCompleted: string; // BigInt values will be returned as strings
    rating: string; // BigInt values will be returned as strings
    walletAddress: string;
    projectsTakenUp: string[]; // Array of BigInt values as strings
  }
export const viewFreelanceProfile = async (_freeID:number) :Promise<Freelancer> =>{
    try{
        const accounts = await web3.eth.getAccounts();
        const account0 = accounts[0];
        const profile: Freelancer = await myContract.methods.viewFreelanceProfile(_freeID).call({from: account0});
        console.log(profile);
        return profile;
    }
    catch(err){
        console.log(`Error: ${err}`);
        throw new Error(`Error fetching profile: ${(err as Error).message}`);
    }
}