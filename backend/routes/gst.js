const router = require("express").Router();
const Product = require("../model/Product");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
