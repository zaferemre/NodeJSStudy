const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const Customer = require("./models/customer");

mongoose.set("strictQuery", false);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const PORT = process.env.PORT || 5001;

const customer = new Customer({
  name: "Luna",
  industry: "AngelPet",
});
customer.save();

app.get("/", (req, res) => {
  res.send(customer);
});
app.get("/api/customers", async (req, res) => {
  try {
    const result = await Customer.find();
    res.send({ customers: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/", (req, res) => {
  res.send(json);
});

console.log(uuidv4());

console.log("Hello");

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://zaferce34:<şifrem>@cluster0.zak7c2y.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => {
      console.log("App listening port" + PORT);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
