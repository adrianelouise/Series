  const express = require("express");
  const router = express.Router();
  const serieController = require("../controllers/serieController");

  router.post("/", serieController.criarSerie);
  router.get("/",serieController.listarSeries);
  router.put("/:id", serieController.attSerie);
  router.delete("/:id", serieController.delSerie);


  module.exports = router;
