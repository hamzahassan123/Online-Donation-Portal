const express = require("express");
const authenticate = require("../middleware/authenticate");
// import express from "express";

const router = express.Router();

require("../db/conn");

const Donation = require("../model/medcineDonationSchema");

router.get("/getdonationrecords", async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    //object destructuring

    try {
        const getDonations = await Donation.find({}); //we can  mention conditions inside it
        res.status(200).json(getDonations);
    } catch (error) {
        res.status(400).json({ error: "Data cant recieved" });
        console.log(error);
    }
});

router.get("/getdonationbyid/:id", async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    //object destructuring

    try {
        const donation = await Donation.findById(req.params.id); //we can  mention conditions inside it
        res.status(200).json(donation);
    } catch (error) {
        res.status(400).json({ error: "Data cant recieved" });
        console.log(error);
    }
});

router.post("/add/medicine-donation", authenticate, async (req, res) => {
    try {
        const { medicine_name, quantity, date, approval_status } = req.body;

        const medicine = await Donation.create({
            medicine_name,
            quantity,
            date,
            approval_status,
            user_id: req.user._id
        });

        if (!medicine) {
            res.status(400);
            res.send("Medicine donation not created!");
        }

        res.json(medicine);
    } catch (error) {
        res.status(400).json({ error: "Data cant recieved" });
        console.log(error);
    }
});

router.put("/edit-donation/:id", authenticate, async (req, res) => {

    try {
        const { medicine_name, quantity, date, approval_status } = req.body;
        const id = req.params.id;

        const medicine = await Donation.findById(id);


        medicine.medicine_name = medicine_name || medicine.medicine_name;
        medicine.quantity = quantity || medicine.quantity;
        medicine.date = date || medicine.date;
        medicine.approval_status = approval_status || medicine.approval_status;

        await medicine.save();

        res.send("Medicine updated!");
    } catch (error) {
        res.status(400).json({ error: "Data cant recieved" });
        console.log(error);
    }
});

router.delete("/deletedonation/:id", async (req, res) => {
    // header("Access-Control-Allow-Origin", "*");
    // res.set("Access-Control-Allow-Origin", "*");
    //object destructuring

    try {
        await Donation.deleteOne({ _id: req.params.id });
        res.send("Deleted medicine");
    } catch (error) {
        console.log("unable to delete");
    }
});


module.exports = router;
