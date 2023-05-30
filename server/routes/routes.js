const express = require("express");
const router = express.Router();

const ssapi = require("../controllers/ssapi.js");

router.post("/api/python/run", ssapi.runPythonCode);

router.post("/api/command/run", ssapi.runBashCommand);

module.exports = router;
