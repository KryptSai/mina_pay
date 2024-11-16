# Mina Pay using Proto-kit

This repository presents Mina Pay aimed at quick and smooth payment using the Protokit framework and NFC reader.

## Quick start

**Prerequisites:**

- Node.js `v18.18` (we recommend using NVM)
- pnpm `v9.8.0`
- nvm
- (optional) For running with persistance / deploying on a server
    - docker `>= 24.0`
    - docker-compose `>= 2.22.0`

**Run the following commands to get started:**
```zsh
# clone the repository
git clone https://github.com/KryptSai/mina_pay
cd mina_pay

# ensures you have the right node.js version
nvm use

# install dependencies
pnpm install

# starts both the UI and the sequencer (file watcher / live reload enabled)
pnpm env:inmemory dev  --filter chain
```

### Structural overview

The starter kit contains the following files and folders:
```
├── apps
│   └── web // UI that connects to the app-chain's sequencer
│       ├── components // display components
│       ├── containers // smart components ("containers")
│       └── lib
│           └── stores // data stores for interacting with the app-chain's sequencer
│           
├── docker
│   └── data // mounted as a volume for the docker containers
│
└── packages
    └── chain
        ├── src // source files for various app-chain modules
        │   ├── app-chain // app-chain modules (signers, queries, ...)
        │   ├── environments // app-chain environments (inmemory, development, ...)
        │   ├── indexer // indexer configuration (graphql server, storage services, ...)
            ├── processor // processor configuration (handlers, graphql resolvers, graphql server, ...)
        │   ├── protocol // protocol modules (transaction fees, ...)
        │   ├── runtime // runtime modules (MinaPay's business logic, such as mint tokens, transfer token, ...)
        │   │   └── modules 
        │   │       └── balances.ts // built-in example runtime module for Balances, with a faucet
        │   ├── sequencer // sequencer modules (graphql server, mempool, block production, ...)
        └── test // tests for various app-chain components
            └── runtime
                └── modules
                    └── balances.test.ts

```
### Packages

There are two packages : chain and tests. Source folder src inside chain contains source files for various app-chain modules. The main contract is token.ts in packages/ chain/ src/ runtime/ modules.

### nfc-webapp

nfc-webapp folder contains front-end application for NFC reader. This is used in Mina-pay to create NFC based wallet, enabling tap and pay payment system.

### Tests

The file token.test.ts, in packages/ chain/ test/ runtime/ modules, contains test cases to deply the contract, mint tokens and transfer tokens.

### Running tests

```zsh
# run and watch tests for the `chain` package
pnpm env:inmemory run test --filter=chain -- --watchAll
```
