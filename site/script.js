
const RPC_URL = "";

const rpc_provider = new ethers.providers.JsonRpcProvider(RPC_URL);

const user_provider = new ethers.providers.Web3Provider(window.ethereum)
let signer;

async function connect() {
  await user_provider.send("eth_requestAccounts", []);
  signer = user_provider.getSigner();
}

async function approve() {
  //approve to contract
}

async function set_pixel() {
  //set pixel
}

async function get_pixels() {
  //get dimensions, pixels
  //for loop with dimensions, get values of pixels mapping
  //rpc_provider
}

function draw_pixels() {
  //draw pixels to canvas?
}
