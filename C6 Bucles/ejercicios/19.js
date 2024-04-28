function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var acum=0
  for (var i=1; i<=n;i++){
    acum=acum+i
  }
  return acum
}

module.exports = sumarHastaN;
