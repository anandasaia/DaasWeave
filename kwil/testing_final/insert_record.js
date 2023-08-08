//insert .js
const { kwil, dbid, signer } = require("./index");
const { Utils } = require("kwil");

async function addRecord(id, title, description, creator, topic) {
  const inputs = new Utils.ActionInput()
    .put("$id", id)
    .put("$title", title)
    .put("$description", description)
    .put("$creator", creator)
    .put("$topic", topic);

  const actionTx = await kwil
    .actionBuilder()
    .dbid(dbid)
    .name("add_records")
    .concat(inputs)
    .signer(signer)
    .buildTx();

  return await kwil.broadcast(actionTx);
}
//addRecord(1, "hi", "ell", "fuckit", "black");
