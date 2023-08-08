const axios = require("axios");

const serverBaseUrl = "http://localhost:1212"; // Change this to your server's URL

async function addRecord(id, title, description, creator, topic) {
  try {
    const response = await axios.post(`${serverBaseUrl}/addRecord`, {
      id,
      title,
      description,
      creator,
      topic,
    });
    console.log("Record added:", response.data);
  } catch (error) {
    console.error("Error adding record:", error);
  }
}

async function readRecords() {
  try {
    const response = await axios.get(`${serverBaseUrl}/readRecords`);
    const records = response.data;
    console.log("Records:", records);
  } catch (error) {
    console.error("Error reading records:", error);
  }
}

// Call the functions as needed
addRecord(5, "Greetings", "A friendly message", "John Doe", "Communication");
//readRecords();
