//insert .js
const { kwil, dbid, signer } = require("./index");
const { Utils } = require("kwil");

async function addRecord(id, msg, wallt, link, tag) {
  const inputs = new Utils.ActionInput()
    .put("$id", id)
    .put("$description", msg)
    .put("$wallet", wallt)
    .put("$link", link)
    .put("$tags", tag);

  const actionTx = await kwil
    .actionBuilder()
    .dbid(dbid)
    .name("add_records")
    .concat(inputs)
    .signer(signer)
    .buildTx();

  return await kwil.broadcast(actionTx);
}

addRecord(4, "Hello World!", "asdfkjakfj", "lksfjdlkasjklfj", "hello");
