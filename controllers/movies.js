const express = require("express");
const movie = express.Router();
const Users = require("../models/Users");

movie.put("/:userId/:movieId", (req, res) => {
    Users.findByIdAndUpdate(
        { _id: req.params.userId },
        {
            $addToSet: {
                favorites: req.params.movieId
            }
        },
        { new: true },
        (err, updatedUser) => {
            if (err) console.log(err.message);
            console.log(`Movie has been added.`);
            res.json(updatedUser);
        }
    ).catch(console.error);
});

movie.delete("/:userId/:deleteMovieId", (req, res) => {
    Users.findByIdAndUpdate(
        { _id: req.params.userId },
        {
            $pull: {
                favorites: req.params.deleteMovieId
            }
        },
        { new: true },
        (err, updatedUser) => {
            if (err) console.log(err.message);
            console.log("Movie has been deleted.");
            res.json(updatedUser);
        }
    ).catch(console.error);
});

module.exports = movie;
