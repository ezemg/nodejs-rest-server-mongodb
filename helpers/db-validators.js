const mongoose = require('mongoose');

const Role = require('../models/role.js');
const Usuario = require('../models/usuario.js');

const esRoleValido = async (rol = '') => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`el rol ${rol} no esta registrado en la DB`);
  }
};

const emailExiste = async (correo = '') => {
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    throw new Error(`el correo: ${correo} ya se encuentra registrado en la DB`);
  }
};

const existeUsuarioPorId = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error(`No es un id valido`);
  }

  const usuarioExiste = await Usuario.findById(id);

  if (!usuarioExiste) {
    throw new Error(`No existe id: ${id}`);
  }
};

module.exports = {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId,
};
