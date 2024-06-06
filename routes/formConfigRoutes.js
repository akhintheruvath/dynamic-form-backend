const express = require("express");
const router = express.Router();
const formConfig = require("../controllers/formConfigController");

router.get("/form-configurations", formConfig.formConfigurations);

module.exports = router;