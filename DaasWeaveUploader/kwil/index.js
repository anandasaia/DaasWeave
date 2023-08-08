const { NodeKwil, Utils } = require("kwil");
const { Wallet } = require("ethers");

const kwil = new NodeKwil({
  kwilProvider: "https://provider.kwil.com/",
});

const walletAddress = "0xdCA4Cc712011f1f7f87562399d0a5EAdEE4186F8"; // Use your own address here
const databaseName = "records";

const dbid = Utils.generateDBID(walletAddress, databaseName);

const signer = new Wallet(
  "33a7c97a75a891872eec2f5cdcc6df3f9edc2184e9f678cdbc8a59bb8d7535c1"
); // Use your own private key here

module.exports = {
  kwil,
  dbid,
  signer,
};
