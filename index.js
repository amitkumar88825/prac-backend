import express from "express";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());


// Route to read data from the file and send it as a response
app.use("/", (req, res) => {
    try {
        const data = fs.readFileSync("./my-files/data.txt", "utf-8");
        res.send(data);
    } catch (err) {
        res.status(500).send("Error reading file");
    }
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});