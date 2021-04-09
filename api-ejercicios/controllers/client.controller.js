/**
 * Controlador para generar reporte del cliente con más ventas.
 */
const excel = require("../services/excel.service");
const fs = require("fs");
const _pg = require("../services/postgres.service");
const topClient = require("../services/topClient.service");

const getReportClient = async (req, res) => {
    try {
      let sql = "SELECT * FROM venta limit 5699";
      let response_db = await _pg.execute(sql);
      let rows = response_db.rows;
 
      let client = topClient(rows,1);

      sql = "SELECT vehiculo.precio, vehiculo.marca, cliente.nombre, cliente.cedula, cliente.id FROM venta "+
      "JOIN vehiculo ON vehiculo.id = venta.id_vehiculo JOIN cliente ON cliente.id = venta.id_cliente "+
      "WHERE venta.id_cliente = " + client;
      response_db = await _pg.execute(sql);
      rows = response_db.rows;
        
      let headers = [
        { header: "precio", key: "precio" },
        { header: "marca", key: "marca" },
        { header: "nombre", key: "nombre" },
        { header: "cedula", key: "cedula" },
        { header: "id", key: "id" },
      ];
      let buffer = await excel(headers, rows, "Cliente");
      fs.writeFileSync("./temp/reporte_cliente.xlsx", buffer);
      return res.download("./temp/reporte_cliente.xlsx", "reporte_cliente.xlsx");
    } catch (error) {
      console.error(error);
      return res.send(error);
    }
  };
  
  module.exports = { getReportClient };