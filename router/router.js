const express = require("express");
const router = new express.Router(); //binded router with express

router.use(express.json());

// home Api
router.get("/", (req, res) => {
  res.status(200).send("sending from backend");
});

module.exports = router;
