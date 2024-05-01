function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var SumaTotal = 0
  for (var i = 0; i < arrayOfNums.length; i++) {
    SumaTotal = SumaTotal + arrayOfNums [i]
  }
  return SumaTotal
}

module.exports = agregarNumeros;
