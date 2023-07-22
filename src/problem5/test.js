const { ethers } = require("ethers");

const ADDR = "0xa31b11A8F2159E506956Aebe86C49b77397EC98E";   // your contract address
const ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "wallet",
				"type": "address"
			},
			{
				"internalType": "address[]",
				"name": "tokenAddresses",
				"type": "address[]"
			}
		],
		"name": "getBalances",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "token",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "balance",
						"type": "uint256"
					}
				],
				"internalType": "struct TokenBalanceRetriever.TokenBalance[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];    // your contract ABI

const ADDRESS = "0x4CB736236b3D6B2e3561791022C855f24c738043"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x54FA517F05e11Ffa87f4b22AE87d91Cec0C2D7E1",
	"0x2DF684C8F22F87200f1860CA0856d4410A07Fcb9",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
var node_url = "https://eth-sepolia.public.blastapi.io";
const provider = new ethers.JsonRpcProvider(node_url);

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  var balances = await contract.getBalances(ADDRESS, TOKENS);
  var formattedBalances = balances.map(balance => {
    return {
      token: balance.token, 
      balance: balance.balance.toString()
    }
  });
	
	return formattedBalances;
};

test().then(console.log);