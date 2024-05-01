const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var contador = 0
  for (const propiedad in objeto) {
    contador = contador + 1
  }
  return contador
};

module.exports = contarPropiedades;
