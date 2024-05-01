function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var arrayMayusculas = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      arrayMayusculas.push(array[i].toUpperCase());
    } else {
      arrayMayusculas.push(array[i]);
    }
  }
  return arrayMayusculas;
}

module.exports = convertirStringAMayusculas;
