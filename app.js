require('dotenv').config();
const express = require("express")
const s3 = require("./aws")
const port = process.env.PORT || 5002;
const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

s3.listBuckets(function(err, data) {
 if (err) {
 console.log("Error", err);
 } else {
 console.log("Success", data.Buckets);
 }
});

