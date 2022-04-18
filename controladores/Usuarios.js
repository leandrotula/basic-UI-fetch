const fetch = require("node-fetch");

const ObtenerTodosUsuarios = (req, res) => {
  fetch('http://localhost:3000/usuarios')
  .then(response => response.json())
  .then(response => {
    res.render('vistas/vistaUsuario', {
      usuario: {
        nombre: response.name,
        apellido: response.apellido
      }
    });
  });
};

module.exports = {
  ObtenerTodosUsuarios
};
