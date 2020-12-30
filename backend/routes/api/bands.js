const express = require("express");
const router = express.Router();

const {SantaBand} = require('../../db/models');

router.get("/", async (req, res, next) => {
    try {
        const bands = await SantaBand.findAll();
        res.json({bands: bands});
    } catch (e) {
        next(e);
    }
});

module.exports = router;