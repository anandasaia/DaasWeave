const { NodeKwil, Utils } = require("kwil");
const { Wallet } = require("ethers");

const kwil = new NodeKwil({
  kwilProvider: "https://provider.kwil.com/",
});

const walletAddress = "0xdCA4Cc712011f1f7f87562399d0a5EAdEE4186F8"; // Use your own address here
const databaseName = "asset_records";

const dbid = Utils.generateDBID(walletAddress, databaseName);

const signer = new Wallet(
  ""
); // Use your own private key here

module.exports = {
  kwil,
  dbid,
  signer,
};
