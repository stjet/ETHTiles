const TILES_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "max_width",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "max_height",
        "type": "uint32"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
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
        "internalType": "uint32",
        "name": "_color",
        "type": "uint32"
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
        "name": "color",
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
        "internalType": "uint32",
        "name": "color",
        "type": "uint32"
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

const web3_read = new Web3();

//https://songbird-api.flare.network/ext/C/rpc
//https://sgb.ftso.com.au/ext/bc/C/rpc
const RPC_URL = "https://sgb.ftso.com.au/ext/bc/C/rpc";
const TOKEN_CONTRACT_ADDRESS = "0x376cf089c29d3c1d353028E181Ae3162ec3a5c1A";
const TILES_CONTRACT_ADDRESS = "0x98086B8b4baf43A5Ec5fC00F37306C2e58547A46";

const TOKEN_DECIMALS = 18;

web3_read.eth.setProvider(RPC_URL);
let tiles_contract_read = new web3_read.eth.Contract(TILES_ABI, TILES_CONTRACT_ADDRESS);

let tiles_contract;
let token_contract;

let connected = false;
let web3_user;

function connect_actions(account) {
  web3_user = new Web3(window.ethereum);
  tiles_contract = new web3_user.eth.Contract(TILES_ABI, TILES_CONTRACT_ADDRESS, {
    from: account
  });
  token_contract = new web3_user.eth.Contract(ERC20_ABI, TOKEN_CONTRACT_ADDRESS, {
    from: account
  });
  console.log(token_contract.defaultAccount)
  document.getElementById("connect-btn").innerText = "Connected";
  document.getElementById("connect-btn").disabled = true;
  document.getElementById("buy-btn").disabled = false;
  document.getElementById("buy-btn").innerText = "Buy Pixel";
  document.getElementById("approve-btn").disabled = false;
  document.getElementById("approve-btn").innerText = "Approve Spending";
  connected = true;
}

//check if already connected
if (window.ethereum) {
  window.ethereum.request({method: 'eth_accounts'}).then((accounts) => {
    if (accounts.length > 0) {
      connect_actions(accounts[0]);
    }
  });
}

async function connect() {
  if (window.ethereum) {
    //error thrown if user rejects request, and connect stopped
    let accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
    connect_actions(accounts[0]);
  }
}

function color_to_u32(color) {
  return (new Uint32Array((new Uint8Array(color)).buffer))[0];
}

function u32_to_color(u32) {
  return Array.from(new Uint8Array((new Uint32Array([u32])).buffer));
}

async function approve(amount) {
  if (!connected) return;
  let buy_price = Number(document.getElementById("buy-price").value);
  if (isNaN(buy_price)) return;
  buy_price = BigInt(buy_price)*(BigInt(10)**BigInt(TOKEN_DECIMALS));
  await token_contract.methods.approve(TILES_CONTRACT_ADDRESS, buy_price).send();
}

async function buy(x, y) {
  if (!connected) return;
  let buy_price = Number(document.getElementById("buy-price").value);
  if (isNaN(buy_price)) return;
  buy_price = BigInt(buy_price)*(BigInt(10)**BigInt(TOKEN_DECIMALS));
  let new_color = document.getElementById("new-color").value;
  new_color = new_color.replace("(", "").replace(")", "").split(",").map((item) => parseInt(item));4
  if (new_color.length !== 4) return;
  for (let c=0; c < new_color.length; c++) {
    if (isNaN(new_color[c]) || new_color[c] > 255) return;
  }
  await tiles_contract.methods.setPixel(buy_price, x, y, color_to_u32(new_color)).send();
  //
}

async function clear_pixel() {
  //
}

async function get_pixels(width, height) {
  console.log(width, height)
  return await new Promise((resolve, reject) => {
    let batch = new web3_read.eth.BatchRequest();
    let pixels = [];
    for (let y=0; y < height; y++) {
      for (let x=0; x < width; x++) {
        batch.add(tiles_contract_read.methods.pixels(y, x).call.request((error, pixel) => {
          if (error) console.log(error);
          pixels.push(pixel);
          if (pixels.length === height*width) {
            resolve(pixels);
          }
        }));
      }
    }
    batch.execute();
  });
}

class PixelsGrid {
  constructor(canvas, canvas2, pixels, width, height) {
    this.canvas = canvas;
    this.canvas2 = canvas2;
    this.pixels = pixels;
    this.width = width;
    this.height = height;
    this.scaleFactor = 1;
    this.translateFactor = [0, 0];
    this.pixelSize = 20;
    this.border = true;
    this.selected = false;
    this.canvas2.addEvent("click", [this], false);
    this.canvas.components.push(this);
  }
  update() {
    //draw pixels at scale
    for (let i=0; i < this.pixels.length; i++) {
      let pixel = this.pixels[i];
      //console.log(pixel)
      let color = u32_to_color(pixel.color);
      let path = new Path2D();
      let x = i%this.width;
      let y = Math.floor(i/this.width);
      path.rect(x*this.pixelSize, y*this.pixelSize, this.pixelSize, this.pixelSize);
      if (this.border) {
        this.canvas.context.strokeStyle = "black";
        this.canvas.context.lineWidth = 2;
        this.canvas.context.stroke(path);
      }
      color[3] = Math.round(color[3]*100/255)/100;
      this.canvas.context.fillStyle = "rgba("+color.join(", ")+")";
      this.canvas.context.fill(path);
    }
  }
  click(e) {
    //see which box the click is in
    let x = Math.floor(e.offsetX/this.pixelSize);
    let y = Math.floor(e.offsetY/this.pixelSize);
    if (x >= this.width) return;
    if (y >= this.height) return;
    this.selected = [x, y];
    this.canvas2.clear();
    let path = new Path2D();
    path.rect(this.selected[0]*this.pixelSize, this.selected[1]*this.pixelSize, this.pixelSize, this.pixelSize);
    this.canvas2.context.fillStyle = "rgba(255, 255, 0, 0.5)";
    this.canvas2.context.fill(path);
    document.dispatchEvent(new CustomEvent("pixelclick", {
      detail: {
        pixel: this.pixels[y*this.height+x],
        coords: this.selected
      }
    }));
  }
  mousemove(e) {
    //e.offsetX, e.offsetY
  }
}

let canvas;
let canvas2;

async function draw_pixels() {
  let width = await tiles_contract_read.methods.width().call();
  let height = await tiles_contract_read.methods.height().call();
  let pixels = await get_pixels(width, height);
  console.log(pixels[0], pixels.length);
  document.getElementById("loading-container").style.display = "none";
  document.getElementById("main-grid").style.display = "grid";
  canvas = new Canvas("pixels-canvas");
  canvas2 = new Canvas("pixels-canvas2", false);
  new PixelsGrid(canvas, canvas2, pixels, width, height);
  canvas.update();
  /*setInterval(function() {
    canvas.update();
  }, 1000/6);*/
  //
}

draw_pixels();

document.addEventListener("pixelclick", (event) => {
  let pixel = event.detail.pixel;
  let coords = event.detail.coords;
  document.getElementById("none-selected").style.display = "none";
  document.getElementById("pixel-info").style.display = "block";
  document.getElementById("painter").innerText = pixel.painter;
  //format the coords
  document.getElementById("coords").innerText = "("+coords.join(", ")+")";
  //format the paid amount
  document.getElementById("bought-price").innerText = String(pixel.paid_amount*(10**-TOKEN_DECIMALS));
  //format the color
  document.getElementById("current-color").innerText = "("+u32_to_color(pixel.color).join(", ")+")";
  document.getElementById("buy-btn").onclick = function() {
    buy(coords[0], coords[1]);
  };
});
