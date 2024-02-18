const express = require("express");

const jwt = require("jsonwebtoken");

const app = express();

const start = require("./system/core/index")(app);

