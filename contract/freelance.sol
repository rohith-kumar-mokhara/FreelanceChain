// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Freelance{
    struct Freelancer{
        uint projectsCompleted;
        uint rating;
        address walletAddress;
        uint[] projectsTakenUp;
    }
    struct Project{
        uint FreelancerId;
        bool isCompleted;
        uint noOfMilestones;
        uint noOfMilestonesCompleted;
        uint amount;
        bool isTakenUp;
        string description;
    }
    mapping(uint => Project) Projects;
    Project[] public ProjectArray;
    mapping(uint => Freelancer) Lancers; 
    uint freeCounter =0;
    uint projectCounter=0;
    event RegisteredFreelancer(address walletAddress,uint FreelancerID);
    event ProjectTakenUp(uint FreelancerID,uint ProjectID);
    function registerFreelance(address walletAddress) external {
        freeCounter++;
        Freelancer storage newFreelancer = Lancers[freeCounter];
        newFreelancer.projectsCompleted=0;
        newFreelancer.rating=0;
        newFreelancer.walletAddress=walletAddress;
        emit RegisteredFreelancer(walletAddress, freeCounter);
    }
    function takeUpProject(uint _freeID,uint _ID) external{
        Project storage exisistingProject = Projects[_ID];
        Freelancer storage existingFreelancer = Lancers[_freeID];
        existingFreelancer.projectsTakenUp.push(_ID);
        exisistingProject.FreelancerId = _freeID;
        exisistingProject.isTakenUp=true;
        emit ProjectTakenUp(_freeID, _ID);
    }
    function createProject(uint amount,uint noOfMilestones,string memory description) public {
        projectCounter++;
        Project storage newProject = Projects[projectCounter];
        //Freelancer storage existingFreelancer = Lancers[_freeID];
        //existingFreelancer.projectsTakenUp.push(projectCounter);
        //newProject.FreelancerId = _freeID;
        newProject.amount=amount;
        newProject.noOfMilestones=noOfMilestones;
        newProject.noOfMilestonesCompleted=0;
        newProject.description = description;
        newProject.isCompleted=false;
    }
    
    function getProjects() public view returns (Project[] memory) {
        Project[] memory allProjects = new Project[](projectCounter);
        for (uint i = 1; i <= projectCounter; i++) {
            allProjects[i-1] = Projects[i];
        }
        return allProjects;
    }
    function getProjectAmount(uint _ID) public view returns(uint amount){
        Project storage exisistingProject = Projects[_ID];
        return exisistingProject.amount;
    }
    event Paid(address payer,uint amount);
    function verifyProjectAndPay(uint _ID,uint noOfMilestones) payable public{
        Project storage exisistingProject = Projects[_ID];
        if(exisistingProject.noOfMilestones==noOfMilestones){
            exisistingProject.isCompleted=true;
            Freelancer storage existingFreelancer = Lancers[exisistingProject.FreelancerId];
            existingFreelancer.projectsCompleted++;
            address payTo = existingFreelancer.walletAddress;
            require(msg.value == exisistingProject.amount, "Pay more!");
            payable(payTo).transfer(msg.value);
            emit Paid(msg.sender,msg.value);
        }
        else{
            exisistingProject.noOfMilestonesCompleted+=noOfMilestones;
        }
    }
    function giveRatings(uint _ID,uint rating) public{
        Project storage exisistingProject = Projects[_ID];
        require(exisistingProject.isCompleted==true,"First Pay, Then give reviews!!");
        Freelancer storage existingFreelancer = Lancers[exisistingProject.FreelancerId];
        existingFreelancer.rating+=rating;
    }
    function viewFreelanceProfile(uint _freeID) public view returns(Freelancer memory){
        Freelancer storage existingFreelancer = Lancers[_freeID];
        return existingFreelancer;
    }
}