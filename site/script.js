const TILES_ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_painter",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint32[2]",
				"name": "_coords",
				"type": "uint32[2]"
			},
			{
				"indexed": false,
				"internalType": "uint8[4]",
				"name": "_color",
				"type": "uint8[4]"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_paid_amount",
				"type": "uint256"
			}
		],
		"name": "ChangePixel",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "x",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "y",
				"type": "uint32"
			}
		],
		"name": "clearPixel",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint32",
				"name": "x",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "y",
				"type": "uint32"
			},
			{
				"internalType": "uint8[4]",
				"name": "color",
				"type": "uint8[4]"
			}
		],
		"name": "setPixel",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getPixelsColors",
		"outputs": [
			{
				"internalType": "uint8[4][10000]",
				"name": "",
				"type": "uint8[4][10000]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "height",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"name": "pixels",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "x",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "y",
				"type": "uint32"
			},
			{
				"internalType": "address",
				"name": "painter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "paid_amount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "pixels_colors",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "width",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const ERC20_ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const RPC_URL = "https://songbird-api.flare.network/ext/C/rpc";
const TOKEN_CONTRACT_ADDRESS = "0x376cf089c29d3c1d353028E181Ae3162ec3a5c1A";
const TILES_CONTRACT_ADDRESS = "0x3409d40c959280Ea1c59b8433eF02688fB38C229";

const rpc_provider = new ethers.providers.JsonRpcProvider(RPC_URL);
let rpc_signer = rpc_provider.getSigner();

const user_provider = new ethers.providers.Web3Provider(window.ethereum);
let user_signer;

let tiles_contract_read = new ethers.Contract(TILES_CONTRACT_ADDRESS, TILES_ABI, rpc_signer);

let tiles_contract;
let token_contract;

let connected = false;

user_provider.send("eth_accounts", []).then((available_accounts) => {
  console.log(available_accounts)
  if (available_accounts.length !== 0) {
    user_signer = user_provider.getSigner();
    tiles_contract = new ethers.Contract(TILES_CONTRACT_ADDRESS, TILES_ABI, user_signer);
    token_contract = new ethers.Contract(TOKEN_CONTRACT_ADDRESS, ERC20_ABI, user_signer);
    document.getElementById("connect-btn").innerText = "Connected";
    document.getElementById("connect-btn").disabled = true;
    connected = true;
  }
});

async function connect() {
  //will error and stop function if user rejects request
  await user_provider.send("eth_requestAccounts", []);
  user_signer = user_provider.getSigner();
  tiles_contract = new ethers.Contract(TILES_CONTRACT_ADDRESS, TILES_ABI, user_signer);
  token_contract = new ethers.Contract(TOKEN_CONTRACT_ADDRESS, ERC20_ABI, user_signer);
  document.getElementById("connect-btn").innerText = "Connected";
  document.getElementById("connect-btn").disabled = true;
  connected = true;
}

async function approve() {
  if (!connected) return;
  //approve to contract
  //
}

async function set_pixel() {
  if (!connected) return;
  //set pixel
  //
}

async function get_pixels() {
  //get dimensions
  let width = await tiles_contract.width()
  let height = await tiles_contract.height();
  //for loop with dimensions, get values of pixels mapping
  let pixels = [];
  for (let y=0; y < height; y++) {
    let row = [];
    for (let x=0; x < width; x++) {
      let pixel = await tiles_contract.pixels()[y][x];
      row.push(pixel);
    }
    pixels.push(row);
  }
  return pixels
}

async function draw_pixels() {
  //draw pixels to canvas?
  console.log(tiles_contract_read)
  console.log(await tiles_contract.width())
  let pixels = await tiles_contract.getPixelsColors();
  console.log(pixels)
}
