const http = require("http");
const { kwil, dbid, signer } = require("./index");
const { Utils } = require("kwil");

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin (this might be too permissive for a production environment)
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS"); // Allow GET requests (and OPTIONS preflight requests)
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // Allow specific headers

  if (req.method === "OPTIONS") {
    // Handle preflight requests (sent by browsers before making an actual request)
    res.writeHead(200);
    res.end();
    return;
  }
  if (req.url === "/recordData") {
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
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(records));
      } else {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Unexpected response format");
      }
    } catch (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(`Error fetching records: ${error}`);
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
