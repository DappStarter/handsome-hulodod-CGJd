require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remember attitude hockey kite bridge simple'; 
let testAccounts = [
"0xfac274a68e66dee38cc1f328cc35e8cceae2b69ba802b6857469fa84289c7bab",
"0x62d89cea8202b5d0787d87bcce2e8c3fc85f5ff52ebbbaef9a4881fc95f4a4eb",
"0x032d9ab4357d66a10b168e4339e04e0c71631d3e67540fe6908ba5d4bd98ff4b",
"0x190b2335d7c18bd998353a61a7e60043913d4b7275a40757b2e1918597489af7",
"0x48ddbe792b040435b34137bad47805e8147e92ed10cfd6c3dde95d8e246f4321",
"0x5f848e464473e8a49170e0b71fa5b9f3b8bd7f8c189f4f45262b855cdb4a5d39",
"0x2c8512f5ce469da1ecd8f0c91cbbbaba7af2a39a42b4455e8dfbc1ad909be9fa",
"0x1a0ce4a518adc5cee361a4fda219d5c255ea0900bbbe1a15cbbfcebabeb06011",
"0xc210bce7b9442d18bb8ef5cd47e1c7e715644478cb3e6a982c5a512879bababd",
"0x58c449c8e5eda89aacd023244c302da836be0a918cd4e5fd4f6bb9027605f20f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


