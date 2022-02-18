require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth machine equip give casual flat gate'; 
let testAccounts = [
"0xa73ce472e8d586b26dfa5dc16b5d08b2b381c0b1a457e1f81fc72d07d4b46af2",
"0xbaa49a45718a6f18b4525dc4990085f194f9b0aa7c623daf6c085fbf3bbc2a31",
"0xba1ab407c8b6e44e3f5a93445074d2521412cf508797d542200cbd3aaaf84f8c",
"0x35e0f9fff4e82ef38493cb1afe9c12e30fbd93973d22fd1e7a0b5f1455162cbd",
"0x0d0f7bcec734e7be64463c281015a935928dd94faa92b99912d90ae097db17bb",
"0xa6dfd00638c6f834dfe9db1c5d3fd48676341fe576b9c518d377ee359f9cfa94",
"0xfa4dbf1cd7bcdca3dc573ee07486d45c230a20ca5fb217a1a8346b463913ddc7",
"0xdd392a3e2f32f17d66e521b68ca34a8c6a2fbdf30dc5279a0b691a57f0494cf0",
"0x6cce15d85cecff08d1c320c00b708c8f15825ca42c0d718eb2d3f3adf8e63115",
"0x6cc444b2ad4b7fc2b99ff325be5b95f0ca61170b31f7f530bcc6a8fef1cafc22"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

