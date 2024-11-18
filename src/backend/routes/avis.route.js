const {getAvis,addAvis} = require("../controllers/avis.controller");
const express = require("express");
const router = express.Router();

router.get("/",getAvis);
router.post("/",addAvis);

module.exports = router;