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
const OWNER = "0x100e6F9164ADf9C924EDc31bc89Ab8bc1E5db2dd";
const TOKEN_DECIMALS = 18;
const TOKEN_NAME = "TESTT";
const BLOCK_EXPLORER = "https://songbird-explorer.flare.network/";

web3_read.eth.setProvider(RPC_URL);
let tiles_contract_read = new web3_read.eth.Contract(TILES_ABI, TILES_CONTRACT_ADDRESS);

let tiles_contract;
let token_contract;

let GRID_WIDTH;
let GRID_HEIGHT;

let connected = false;
let web3_user;

function connect_actions(account) {
  document.getElementById("connected-address").href = BLOCK_EXPLORER+"address/"+account;
  document.getElementById("connected-address").innerText = account.slice(0, 12)+"..."+account.slice(-10);
  document.getElementById("connected-address").classList.add("linky-link");
  web3_user = new Web3(window.ethereum);
  tiles_contract = new web3_user.eth.Contract(TILES_ABI, TILES_CONTRACT_ADDRESS, {
    from: account
  });
  if (OWNER.toLowerCase() === account.toLowerCase()) {
    document.getElementById("admin-btn").classList.remove("hide");
  }
  token_contract = new web3_user.eth.Contract(ERC20_ABI, TOKEN_CONTRACT_ADDRESS, {
    from: account
  });
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

function get_buy_price() {
  let buy_price = Number(document.getElementById("buy-price").value);
  if (isNaN(buy_price)) return false;
  if (Math.floor(buy_price) !== buy_price) {
    //handle decimals
    let decimals = String(buy_price).split(".")[1].length;
    buy_price = BigInt(buy_price*(10**decimals))*(BigInt(10)**BigInt(TOKEN_DECIMALS-decimals));
  } else {
    buy_price = BigInt(buy_price)*(BigInt(10)**BigInt(TOKEN_DECIMALS));
  }
  return buy_price;
}

async function approve(amount) {
  if (!connected) return;
  let buy_price = get_buy_price();
  if (!buy_price) return;
  await token_contract.methods.approve(TILES_CONTRACT_ADDRESS, buy_price).send();
}

async function buy(x, y, prev_price) {
  if (!connected) return;
  let buy_price = get_buy_price();
  if (!buy_price) return;
  //parse color
  let new_color = document.getElementById("new-color").value;
  new_color = new_color.replace("(", "").replace(")", "").split(",").map((item) => parseInt(item));
  if (new_color.length === 3) {
    //if no alpha channel, default to fully opaque
    new_color.push(255);
  }
  if (new_color.length !== 4) return;
  for (let c=0; c < new_color.length; c++) {
    if (isNaN(new_color[c]) || new_color[c] > 255) return;
  }
  //make sure buy price is greater than old buy price, otherwise transaction will fail
  if (prev_price >= buy_price) {
    alert("Your buy price is lower than the required price to overwrite the pixel colour!");
    return;
  }
  await tiles_contract.methods.setPixel(buy_price, x, y, color_to_u32(new_color)).send();
}

async function clear_pixel() {
  //
}

async function get_pixels() {
  console.log(GRID_WIDTH, GRID_HEIGHT)
  return await new Promise((resolve, reject) => {
    let batch = new web3_read.eth.BatchRequest();
    let pixels = [];
    for (let y=0; y < GRID_HEIGHT; y++) {
      for (let x=0; x < GRID_WIDTH; x++) {
        batch.add(tiles_contract_read.methods.pixels(y, x).call.request((error, pixel) => {
          if (error) console.log(error);
          pixels.push(pixel);
          if (pixels.length === GRID_HEIGHT*GRID_WIDTH) {
            resolve(pixels);
          }
        }));
      }
    }
    batch.execute();
  });
}

class PixelsGrid {
  constructor(canvas, pixels, width, height) {
    this.canvas = canvas;
    this.pixels = pixels;
    this.width = width;
    this.height = height;
    this.scaleFactor = 1;
    this.translateFactor = [0, 0];
    this.pixelSize = 20;
    this.borders = true;
    this.selected = false;
    this.canvas.addEvent("click", [this], false);
    this.canvas.components.push(this);
  }
  draw_pixel(x, y, clear=false, selected=false) {
    let true_x = x*this.pixelSize-this.translateFactor[0];
    let true_y = y*this.pixelSize-this.translateFactor[1];
    if (clear) {
      this.canvas.context.clearRect(true_x, true_y, this.pixelSize, this.pixelSize);
    }
    let path = new Path2D();
    path.rect(true_x, true_y, this.pixelSize, this.pixelSize);
    let color = u32_to_color(this.pixels[y*this.width+x].color);
    color[3] = Math.round(color[3]*100/255)/100;
    this.canvas.context.fillStyle = "rgba("+color.join(", ")+")";
    this.canvas.context.fill(path);
    if (selected) {
      this.canvas.context.fillStyle = "rgba(255, 255, 0, 0.8)";
      this.canvas.context.fill(path);
    }
    if (this.borders) {
      this.canvas.context.strokeStyle = "black";
      this.canvas.context.lineWidth = 0.4;
      this.canvas.context.stroke(path);
    }
  }
  update() {
    //draw pixels at scale
    for (let i=0; i < this.pixels.length; i++) {
      let pixel = this.pixels[i];
      //console.log(pixel)
      let x = i%this.width;
      let y = Math.floor(i/this.width);
      if (this.selected[0] === x && this.selected[1] === y) {
        this.draw_pixel(x, y, false, true);
      } else {
        this.draw_pixel(x, y, false, false);
      }
    }
  }
  click(e) {
    //see which box the click is in
    let x = Math.floor((e.offsetX+this.translateFactor[0])/this.pixelSize);
    let y = Math.floor((e.offsetY+this.translateFactor[1])/this.pixelSize);
    if (x >= this.width) return;
    if (y >= this.height) return;
    if (x === this.selected[0] && y === this.selected[1]) return;
    let old_selected = this.selected;
    if (old_selected) {
      this.draw_pixel(old_selected[0], old_selected[1], true, false);
    }
    this.selected = [x, y];
    this.draw_pixel(x, y, true, true);
    document.dispatchEvent(new CustomEvent("pixelclick", {
      detail: {
        pixel: this.pixels[y*this.width+x],
        coords: this.selected
      }
    }));
  }
  mousemove(e) {
    //e.offsetX, e.offsetY
  }
}

let canvas;
let pixel_grid;

async function update_pixels() {
  console.log("Updating pixels (calling tiles smart contract)");
  pixel_grid.pixels = await get_pixels();
  console.log(pixel_grid.pixels[0], pixel_grid.pixels.length);
  canvas.update();
}

async function draw_pixel_grid() {
  let query_params = new URLSearchParams(location.search);
  if (query_params.get("auto_dimensions") === "1") {
    //some hardcoded value to reduce loading time a bit (save on two requests)
    GRID_WIDTH = 100;
    GRID_HEIGHT = 100;
  } else {
    GRID_WIDTH = await tiles_contract_read.methods.width().call();
    GRID_HEIGHT = await tiles_contract_read.methods.height().call();
  }
  let pixels = await get_pixels();
  document.getElementById("loading-container").style.display = "none";
  document.getElementById("main-grid").style.display = "grid";
  canvas = new Canvas("pixels-canvas");
  pixel_grid = new PixelsGrid(canvas, pixels, GRID_WIDTH, GRID_HEIGHT);
  //check x_pos and y_pos to move canvas to that area
  let x_pos = Number(query_params.get("x_pos"));
  let y_pos = Number(query_params.get("y_pos"));
  pixel_grid.translateFactor = [x_pos*pixel_grid.pixelSize-Math.floor(canvas.size[0]/2)-pixel_grid.pixelSize/2, y_pos*pixel_grid.pixelSize-Math.floor(canvas.size[1]/2)-pixel_grid.pixelSize/2];
  if (pixel_grid.translateFactor[0] < 0) {
    pixel_grid.translateFactor[0] = 0;
  }
  if (pixel_grid.translateFactor[1] < 0) {
    pixel_grid.translateFactor[1] = 0;
  }
  //update canvas
  canvas.update();
  //update pixels every minute or so
  setInterval(update_pixels, 60*1000);
}

draw_pixel_grid();

let sections = ["pixel-info", "admin", "about", "settings"]

function change_section(new_section) {
  for (let i=0; i < sections.length; i++) {
    document.getElementById(sections[i]+"-container").classList.add("hide");
    document.getElementById(sections[i]+"-btn").classList.remove("section-change-selected");
  }
  document.getElementById(new_section+"-container").classList.remove("hide");
  document.getElementById(new_section+"-btn").classList.add("section-change-selected");
  //
}

function coords_link_copy() {
  navigator.clipboard.writeText("https://"+location.host+"/?x_pos="+String(pixel_grid.selected[0])+"&y_pos="+String(pixel_grid.selected[1]));
}

document.addEventListener("pixelclick", (e) => {
  let pixel = e.detail.pixel;
  let coords = e.detail.coords;
  document.getElementById("none-selected").classList.add("hide");
  document.getElementById("pixel-info").classList.remove("hide");
  document.getElementById("painter").innerText = pixel.painter;
  //format the coords
  document.getElementById("coords").innerText = "("+coords.join(", ")+")";
  //format the paid amount
  document.getElementById("bought-price").innerText = String(pixel.paid_amount*(10**-TOKEN_DECIMALS))+" "+TOKEN_NAME;
  //format the color
  document.getElementById("current-color").innerText = "("+u32_to_color(pixel.color).join(", ")+")";
  document.getElementById("buy-btn").onclick = function() {
    buy(coords[0], coords[1], BigInt(pixel.paid_amount));
  };
});

let accelerate = 0;

//keydown
document.addEventListener("keydown", (e) => {
  if (!pixel_grid) return;
  if (e.repeat) {
    accelerate += 1;
    if (accelerate > 18) {
      accelerate = 18;
    }
  } else {
    accelerate = 0;
  }
  let listen_keys = ["arrowup", "arrowleft", "arrowdown", "arrowright", "w", "a", "s", "d"];
  let key = e.key.toLowerCase();
  if (listen_keys.includes(key)) {
    if (key === "arrowup" || key === "w") {
      pixel_grid.translateFactor[1] -= 2+accelerate;
      //
    } else if (key === "arrowleft" || key === "a") {
      pixel_grid.translateFactor[0] -= 2+accelerate;
      //
    } else if (key === "arrowdown" || key === "s") {
      pixel_grid.translateFactor[1] += 2+accelerate;
      //
    } else if (key === "arrowright" || key === "d") {
      pixel_grid.translateFactor[0] += 2+accelerate;
      //
    }
    if (pixel_grid.translateFactor[0] < -10) {
      pixel_grid.translateFactor[0] = -10;
    }
    if (pixel_grid.translateFactor[1] < -10) {
      pixel_grid.translateFactor[1] = -10;
    }
    let max_x_trans = pixel_grid.width*pixel_grid.pixelSize+10-canvas.size[0];
    if (pixel_grid.translateFactor[0] > max_x_trans) {
      pixel_grid.translateFactor[0] = max_x_trans;
    }
    let max_y_trans = pixel_grid.height*pixel_grid.pixelSize+10-canvas.size[1];
    if (pixel_grid.translateFactor[1] > max_y_trans) {
      pixel_grid.translateFactor[1] = max_y_trans;
    }
    canvas.update();
  }
});

document.getElementById("toggle-borders").addEventListener("change", function(e) {
  if (!pixel_grid) return;
  if (document.getElementById("toggle-borders").checked) {
    pixel_grid.borders = true;
  } else {
    pixel_grid.borders = false;
  }
  canvas.update();
});

let current_touch;

document.addEventListener("touchstart", function(e) {
  current_touch = {
    original_touch: [e.touches[0].clientX, e.touches[0].clientY],
    original_translate: pixel_grid.translateFactor,
  }
});

document.addEventListener("touchmove", function(e) {
  //current_touch.original_touch[0] - e.touches[0].clientX
  //current_touch.original_touch[1] - e.touches[0].clientY
});

document.addEventListener("touchend", function(e) {
  current_touch = undefined;
});

window.addEventListener("resize", function(_e) {
  console.log('resize detected')
  if (canvas) {
    console.log("changing size")
    canvas.size = [canvas.canvas.parentElement.offsetWidth, canvas.canvas.parentElement.offsetHeight];
    canvas.canvas.width = canvas.size[0];
    canvas.canvas.height = canvas.size[1];
    canvas.update();
  }
});
