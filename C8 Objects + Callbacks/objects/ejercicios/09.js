function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  var PrimerUsuario = new Object();
  PrimerUsuario.nombre= nombre;
  PrimerUsuario.email= email;
  PrimerUsuario.password= password;
  return PrimerUsuario
}

module.exports = nuevoUsuario;
