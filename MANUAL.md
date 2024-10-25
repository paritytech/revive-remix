# REMIX Usage Guide with Westend Network

This document describes how to configure and use REMIX IDE with the Westend network. Follow these steps to complete the setup and start deploying and interacting with contracts on the Westend testnet.

---

## Prerequisites

1. **Install MetaMask Wallet**  

   Install the MetaMask browser extension and create an Ethereum account. MetaMask will allow REMIX to interface with the Westend network.

---

## Steps

### 1. Launch REMIX

- Open [REMIX IDE](https://remix.polkadot.io) in your browser.
- Navigate to the **Deploy & Run** tab.
- Select **Westend Testnet - MetaMask Provider**.
- When prompted, allow REMIX to connect to MetaMask.

### 2. Request Westend (WND) Tokens

- Open the Westend faucet: [Westend Faucet](https://faucet.polkadot.io/westend).
- Choose **Westend** as the network and **Chain Asset Hub**.
- Enter your Westend address. Note that this requires a Westend address, while in Metamask, an Ethereum address has been created. REMIX maps your Ethereum address to a Westend address, which can be viewed in the **Deploy & Run** tab under **Account**.

### 3. Compile the Contract

- By default, REMIX provides a sample workspace.
- Choose your Solidity contract (`*.sol` file) and compile it by clicking the **Play** button.
- Alternatively, use the **Solidity Compiler** tab for compilation.

### 4. Deploy to Westend

- Confirm that the **Westend Testnet - MetaMask** provider is selected in the **Deploy & Run** tab.
- Click **Deploy** and sign the transaction in MetaMask.
- Wait for the deployment to complete, as indicated in the terminal panel.

### 5. Interact with Deployed Contracts

- Once deployed, your contract will appear in the **Deployed Contracts** section of the **Deploy & Run** tab.
- You can interact with your contract by calling its methods from this section, with all transactions routed through MetaMask.

### 6. Run Tests

- Currently, REMIX supports **JavaScript tests** only.
- To run tests, navigate to the **File Explorer** and select any JavaScript test file in the **test** directory.

---

This setup allows you to deploy and test contracts on the Westend testnet through REMIX. For further customization or troubleshooting, refer to the official [REMIX documentation](https://remix-ide.readthedocs.io).
