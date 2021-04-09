const express = require("express");
const router = express.Router();
const report_controller = require("../controllers/sales.controller");
const report_controller_client = require("../controllers/client.controller");


//Rutas para ejecutar reportes
router.get("/reportes/ventas", report_controller.getReportSales);
router.get("/reportes/cliente", report_controller_client.getReportClient);

module.exports = router;