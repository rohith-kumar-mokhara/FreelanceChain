# FreelanceChain

FreelanceChain is a decentralized application (dApp) designed to connect freelancers with clients seeking to complete projects. Utilizing Ethereum blockchain technology, FreelanceChain automates project requests, project completion, and payment verification. This ensures transparency, security, and efficiency for all parties involved.

## Project Overview

FreelanceChain enables users to:
- **Create Project Requests**: Clients can submit detailed project requests on the blockchain, specifying the project's scope, milestones, and budget.
- **Accept Projects**: Freelancers can browse available projects and accept assignments based on their skills and preferences.
- **Complete Projects**: Freelancers work on the projects and submit their progress.
- **Automated Payments**: Upon project completion, clients can verify the work and release payments automatically through smart contracts.

## Tech Stack

- **React**: For building the front-end user interface of the dApp.
- **Solidity**: For writing the smart contracts that handle project creation, verification, and payment automation.
- **Hardhat**: For Ethereum development, including smart contract deployment and testing.
- **JavaScript**: For integrating the smart contracts with the React front-end and handling blockchain interactions.

## Features

### 1. Project Creation

- **Clients** can create new project requests by specifying details such as project description, milestones, and budget.
- The project request is stored on the Ethereum blockchain, ensuring data integrity and transparency.

### 2. Project Management

- **Freelancers** can view a list of available projects and submit proposals.
- Once a freelancer is selected, they can start working on the project and update their progress.

### 3. Payment Automation

- **Smart Contracts** handle payment processes. Payments are automatically triggered upon project verification.
- **Clients** can verify project completion and release funds to freelancers based on smart contract conditions.

### 4. Verification and Completion

- **Verification** of project completion is handled through smart contracts, ensuring that all milestones are met before payments are released.


## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rohith-kumar-mokhara/bloGz.git
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Install Dependencies**:
   ```bash
   cd contract
   npm install
   ```
4. **Compilation**
   ```bash
   node compile.cjs
   npm i web3 solc hardhat
   ```
5. **Hardhat**
  ```bash
   npx hardhat init
   npx hardhat node
  ```
Open new terminal and
6. ***Run These***
```bash
   cd contract
   node index.cjs
   node deploy.cjs
  ```



FreelanceChain aims to revolutionize the way freelancers and clients interact by leveraging the power of blockchain technology to ensure fairness, security, and efficiency in freelance project management.

## Contribution by Team Members:

- **K Vijay Karthick**: Has written code for smart contracts and using web3 to integrate into the project and integrating all the smart contract functions from interact.ts in to the frontend
- **Rohith**: Has written code for the frontend .
- **Sudheer**: Has debugged all the frontend code
- **Eswar**: Made sure the UI looks attractive
