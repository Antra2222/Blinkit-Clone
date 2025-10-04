const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve all files in the current directory (where index.html and style.css exist)
app.use(express.static(__dirname));

// Serve index.html when someone visits "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
