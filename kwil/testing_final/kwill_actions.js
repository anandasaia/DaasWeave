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

async function readRecords() {
  const actionTx = await kwil
    .actionBuilder()
    .dbid(dbid)
    .name("view_records")
    .signer(signer)
    .buildTx();

  try {
    const response = await kwil.broadcast(actionTx);

    if (response && response.data && Array.isArray(response.data.body)) {
      const recordsArray = response.data.body;
      const records = recordsArray.flat();
      return records; // Return the records array
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    throw new Error("Error fetching records: " + error.message);
  }
}

module.exports = {
  addRecord,
  readRecords,
};

//module.exports = { addRecord };
//module.exports = { readRecords };
readRecords();
//addRecord(2, "wow", "I am", "probably", "screwed");
