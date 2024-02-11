# ETHTiles

![ETHTiles Logo](/images/ethtiles.png)

### This project is more or less a proof-of-concept. See [AstralCredits' Pixel Planet](https://www.astralcredits.xyz/pixels/) (written by MKZI and I), which uses this as the base code, for a much improved version of ETHTiles.

ETHTiles is a dApp (decentralized app) that can be deployed on any EVM blockchain, probably. The smart contract allows colouring tiles in return for a payment in ERC-20 tokens. Those tiles can be repainted if someone else pays a bigger sum to change the colour of that tile.

The smart contracts (in the `contracts` directory) are all licensed under the MIT license. The actual website (in the `site` directory) that allows users to easily see and interact with the tile canvas, is licensed under the GNU GPL v3 license. It would also be very nice of you if you included attribution to me in your fork (to my github or personal website [prussia.dev or prussia.dev/sample]).

If you do not want to be restricted by the license, do not have the technical knowledge to set this up, or need special modifications, I am available for hire.

![ETHTiles Demo/Example Photo](/images/demo.png)

Please note that some public RPCs limit how large a batch request can be. You can still make the canvas as large as you want, but depending on the RPC, you may need to write some code to split the batch requests into several batches, which isn't too hard.
