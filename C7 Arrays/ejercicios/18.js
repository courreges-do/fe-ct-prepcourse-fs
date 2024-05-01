function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var SumaNotas = 0
  for (var i = 0; i < resultadosTest.length; i++) {
    SumaNotas = (SumaNotas + resultadosTest [i])
  }
  var NotaPromedio = SumaNotas / resultadosTest.length
  return NotaPromedio
}

module.exports = promedioResultadosTest;
