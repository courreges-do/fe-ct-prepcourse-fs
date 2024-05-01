function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  array.sort(function(a,b){
    if (typeof a === "string" && typeof b === "string") {
    return a.localeCompare(b);
   } else {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
   }
   });
   return array
}

module.exports = ordenarArray;
