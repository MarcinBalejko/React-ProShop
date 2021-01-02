import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";

// From now on, using node modules ^^^
// const express = require("express");
// const dotenv = require("dotenv");
// const products = require("./data/products");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

// GET All products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// GET Product by ID
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running IN ${process.env.NODE_ENV} on port ${PORT}`)
);
