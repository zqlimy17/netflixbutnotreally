const express = require("express");
const sessions = express.Router();
const User = require("../models/Users");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

sessions.post("/", (req, res) => {
    User.findOne({ username: req.body.username }, (err, foundUser) => {
        if (err) console.log(err.message)
        if (bcrypt.compareSync(req.body.password, foundUser.password)) {
            req.session.currentUser = foundUser;
            res.json(foundUser);
        }
    })
});

module.exports = sessions;
