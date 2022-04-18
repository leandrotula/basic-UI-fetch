const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { ObtenerTodosUsuarios } = require("../controladores/Usuarios");

router.get("/all", ObtenerTodosUsuarios);

module.exports = router;
