const express = require("express");
// import express from "express";

const router = express.Router();

require("../db/conn");

const NGO = require("../model/NGOOfficialEmailSchema");

router.post("/add-NGO", async (req, res) => {
    try {
        const { NGO_email, name } = req.body;
        const ngo = await NGO.create({
            NGO_email,
            name
        });
        res.status(200).json(ngo);
    } catch (error) {
        res.status(400).json({ error: "Data cant recieved" });
        console.log(error);
    }
});




module.exports = router;
