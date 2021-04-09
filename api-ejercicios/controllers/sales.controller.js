/**
 * Controlador para generar el reporte de los vehiculos vendidos, ordenados de menor a mayor precio.
 */
const quickSort = require("../services/topSales.service");
const excel = require("../services/excel.service");
const fs = require("fs");
const _pg = require("../services/postgres.service");

const getReportSales = async (req, res) => {
    try {
      let sql = "SELECT vehiculo.precio, vehiculo.marca, cliente.nombre, cliente.cedula FROM venta "+
      "JOIN vehiculo ON vehiculo.id = venta.id_vehiculo JOIN cliente ON cliente.id = venta.id_cliente";
      let response_db = await _pg.execute(sql);
      let rows = response_db.rows;

      rows = quickSort(rows, 0, rows.length - 1);
  
      let headers = [
        { header: "precio", key: "precio" },
        { header: "marca", key: "marca" },
        { header: "nombre", key: "nombre" },
        { header: "cedula", key: "cedula" },
      ];
      let buffer = await excel(headers, rows, "Precios ordenados");
      fs.writeFileSync("./temp/reporte_precio.xlsx", buffer);
      return res.download("./temp/reporte_precio.xlsx", "reporte_ordemaniento.xlsx");
    } catch (error) {
      console.error(error);
      return res.send(error);
    }
  };
  
  module.exports = { getReportSales };