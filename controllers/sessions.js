const express = require("express");
const sessions = express.Router();
const User = require("../models/Users");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

sessions.post("/", (req, res) => {
    User.findOne({ username: req.body.username }, (err, foundUser) => {
        if (err) {
            console.log("Database error", err.message);
            res.send("Error loading mongodb");
        }
        if (foundUser == null) {
            res.send({ message: null });
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser;
                res.json(foundUser);
            } else {
                res.send({ message: false });
            }
        }
    });
});

module.exports = sessions;
