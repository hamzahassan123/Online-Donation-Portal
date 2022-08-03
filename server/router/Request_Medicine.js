const express = require("express");
const authenticate = require("../middleware/authenticate");
// import express from "express";

const router = express.Router();

require("../db/conn");

const Request = require("../model/requestMedicineSchema");

router.get("/getrequestrecords", authenticate, async (req, res) => {
    //res.set("Access-Control-Allow-Origin", "*");
    //object destructuring

    try {
        const getRequests = await Request.find({}); //we can  mention conditions inside it
        res.status(200).json(getRequests);
    } catch (error) {
        res.status(400).json({ error: "Data cant recieved" });
        console.log(error);
    }
});

router.get("/getrequestbyid/:id", async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    //object destructuring

    try {
        const request = await Request.findById(req.params.id); //we can  mention conditions inside it
        res.status(200).json(request);
    } catch (error) {
        res.status(400).json({ error: "Data cant recieved" });
        console.log(error);
    }
});

router.post("/add/medicine-request", authenticate, async (req, res) => {
    try {
        const { medicine_name, quantity, status } = req.body;

        const user_id = req.user._id;

        const medicine = await Request.create({
            medicine_name,
            quantity,
            status,
            user_id
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

router.put("/edit-request/:id", authenticate, async (req, res) => {

    try {
        const { medicine_name, quantity, status } = req.body;
        const id = req.params.id;

        console.log(req.body);

        const medicine = await Request.findById(id);

        medicine.user_id = req.USERID;
        medicine.medicine_name = medicine_name || medicine.medicine_name;
        medicine.quantity = quantity || medicine.quantity;
        medicine.status = status || medicine.status;

        await medicine.save();

        res.send("Medicine updated!");
    } catch (error) {
        res.status(400).json({ error: "Data cant recieved" });
        console.log(error);
    }
});

router.delete("/deleterequest/:id", async (req, res) => {
    // header("Access-Control-Allow-Origin", "*");
    // res.set("Access-Control-Allow-Origin", "*");
    //object destructuring

    try {
        await Request.deleteOne({ _id: req.params.id });
        res.send("Deleted medicine");
    } catch (error) {
        console.log("unable to delete");
    }
});


module.exports = router;
