const express = require("express");

const app = express();

app.get("/", (req, res) => console.log("Hello server is running.."))

const PORT = 3000;

app.listen(PORT,() => console.log(`Server running on PORT ${PORT}`))