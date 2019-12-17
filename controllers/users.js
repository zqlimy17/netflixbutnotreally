const express = require("express");
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const users = express.Router();

users.post("/", (req, res) => {
    req.body.password = bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(10)
    );
    User.create(
        {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        },
        (err, createdUser) => {
            if (err) console.log(err.message);
            res.json(createdUser);
        }
    );
});

module.exports = users;
