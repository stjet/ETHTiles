// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

interface IERC20 {
  function transferFrom(address sender, address recepient, uint256 amount) external returns (bool);
  function transfer(address to, uint256 amount) external returns (bool);
}

contract Tiles {
  bool public paused = false;
  uint32 public constant width = 100;
  uint32 public constant height = 100;
  address private immutable owner;
  IERC20 private immutable pay_token;

  event ChangePixel(
    address indexed _painter,
    uint32[2] indexed _coords,
    uint8[4] _color,
    uint256 _paid_amount
  );

  struct Pixel {
    uint32 x;
    uint32 y;
    uint8[4] color;
    address painter;
    uint256 paid_amount;
  }

  mapping(uint32 => mapping(uint32 => Pixel)) public pixels;

  constructor(address token) {
    owner = msg.sender;
    pay_token = IERC20(token);
  }

  modifier ownerOnly() {
    require(msg.sender == owner, "Not authorized, must be owner");
    _;
  }

  //setting pixel
	
  function setPixel(uint256 amount, uint32 x, uint32 y, uint8[4] calldata color) public {
    //don't allow if paused
    require(!paused, "Coloring is paused");
    //make sure is within dimensions
    require(width <= x, "x too large, outside dimensions");
    require(height <= y, "y too large, outside dimensions");
    //check if amount is more than current amount (this also disallows paying 0 for pixel)
    require(pixels[y][x].paid_amount < amount, "Amount not enough");
    //try to send
    //caller must first call approve with the token and this contract
    bool send_success = pay_token.transferFrom(msg.sender, address(this), amount);
    require(send_success, "Failed to send");
    //change pixel
    pixels[y][x] = Pixel(x, y, color, msg.sender, amount);
    //emit event
    emit ChangePixel(msg.sender, [x, y], color, amount);
  }

  //admin functions

  function clearPixel(uint32 x, uint32 y) public ownerOnly {
    //allow clearing even if paused
    //make sure is within dimensions
    require(width <= x, "x too large, outside dimensions");
    require(height <= y, "y too large, outside dimensions");
    //actually remove
    delete pixels[y][x];
  }

  function pause() external ownerOnly returns (bool) {
    paused = true;
    return paused;
  }

  function unpause() external ownerOnly returns (bool) {
    paused = false;
    return paused;
  }

  function withdraw(uint256 amount) external ownerOnly returns (bool) {
    bool send_success = pay_token.transfer(owner, amount);
    require(send_success, "Failed to send");
    return true;
  }
}
