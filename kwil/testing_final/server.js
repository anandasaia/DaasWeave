const express = require("express");
const { addRecord, readRecords } = require("./kwill_actions");
const cors = require("cors"); // Import the cors package

const app = express();
const port = 1212;

app.use(express.json());

// Use the cors middleware to enable CORS
app.use(cors());

app.post("/addRecord", async (req, res) => {
  try {
    const { id, title, description, creator, topic } = req.body;
    const result = await addRecord(id, title, description, creator, topic);
    res.json(result);
  } catch (error) {
    console.error("Error adding record:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding the record." });
  }
});

app.get("/readRecords", async (req, res) => {
  try {
    const records = await readRecords();
    res.json(records); // Send the records as JSON response
  } catch (error) {
    console.error("Error reading records:", error);
    res.status(500).json({ error: "An error occurred while reading records." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
