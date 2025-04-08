const express = require("express");
const app = express();
const mongoose = require("mongoose");

const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(mongo_url);
}

app.get("/", (req, res) => {
  res.send("Hi I am root");
});
app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
