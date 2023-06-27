const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51NLjCFLrB2rNVQQDGr" +
"JhxGQgxyFZFbQAYhEJxtMtqoF3P2NayD0zzIDRxn2" +
    "22L17Vrfig1g7mdXRSKWSKdMYxOBu00eZhSkf80");

// Initialize Firebase Admin SDK
// eslint-disable-line no-unused-vars
admin.initializeApp();

// Create an Express app
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) =>{
  const total = request.query.total;
  console.log("Payment request received for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // Ok-Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Create a Firebase Cloud Function
exports.api = functions.https.onRequest(app);
