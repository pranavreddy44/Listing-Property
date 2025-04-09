const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("Hi I am root");
});

app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
});

// app.get("/testListing", async (req, res) => {
//   let sample = new Listing({
//     title: "My new villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Hyderbad India",
//     country: "India",
//   });
//   await sample.save();
//   console.log("Sample was saved");
//   res.send("Successful testing");
// });

app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
