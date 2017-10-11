import consign from "consign";
import express from "express"
var app = express();
var PORT = process.env.PORT || 3000;

consign()
    .include("config")

    .then('models')
        .then('jwt')

    .then('config/middlewares.js')

  
    .then("routes")
    .then("config/boot.js")
    .into(app)

