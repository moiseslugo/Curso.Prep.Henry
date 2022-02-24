// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
 var strInvertida = nombre[0].toUpperCase() + nombre.slice(1);
 return strInvertida;

}/*Tomamos el string como si fuera un arreglo,
 de alli la primera letra ocupa el casillero subindice 0 
 y lo convrtimos en mayuscula con .toUpperCase()
 Luego lo sumamos a slice que elimina el primero subindice es decir cero*/

 //otra solución:  return nombre.charAt(0)+nombre.slice(1) . charaAt(0) da como resultado la primera letra del string.

function invocarCallback(cb) {
cb();
 
}
/* Ccualquier funcion se invoca con (), entonces ya que callback es una funcion se invoca de la misma manera. */


function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1,n2);
    
}


function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma = numeros.reduce(function (acc,curr){
    return acc+curr;
  },0);
  cb(suma);
 }

/* 
 ********************************
 var suma =0;
  for (var i=0; i<numeros.length; i++){
    suma = suma + numeros[i];
  }
  return cb(suma); segun el enunciado no lleva devolucion
*********************************
 Se crea una nueva variable que llamaremso suma y como valor alojaremos la opración que utilizará la funcion nativa .reduce,
 que recorrerá todo el array e ira sumando cada elemento que hay en ella , dejando el valor total como el valor asignad a la variable
 "suma". El callback reduce es una funcion que recibe varios argumentos y que para le proposito de este ejercicio establecemos solos dos,
 donde el primr argumnto lo llamamos "acc" quien es un acumulador que hace el papel de acumular la suma del indice que esta siendo 
 revisado más su valor anterior, donde su valor anterior al no cer declarado asumimos que es igual a cero, luego recibe el segundo 
 argumento que le asignamos la palabra  "curr", del inglés "current" que significa "corriente" y representa el elemento que se 
 esta trabajando en ese momento y que se le sumará al valor resultante de acc. Esta operación trmina dando como resultado la suma de 
 todos los elementos del array.
 Para terminar asignamos el resultado de la suma realizada bien se a traves de la version for o de la version reduce al Cb(suma);

*/

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(i){
    cb(i);
 });
}
/* La solucion de este problema esta en utilizar la funcion nativa forEach que se invoca como una propiedad del array, donde la 
funicon recibe por parametro una variable que hemos llamado i, que corresponderia al elemento del array. for each iteraría a lo 
largo del array el el callback irá aumentando su arrray por cada itración.*/

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
 var nuevoArray= array.map(function (i){
   return cb(i);
 });
 return nuevoArray;
}
/* hacemos una declarion de variable que sera el nuevo array pedido donde una funcion desconocida recibira una opración dada por los elementos
del arrray. Para ello utilizaremos .map que "mapea cada elemento y se lo pasa a la fucnion callback."La funcion nativa .map toma como argumento 
la variable que le asignamos al elemento en nuestro caso se le asigno i.
finalemente retornams el nuevo array */

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  /*nuevoArray=[];
  for(var i =0; i<array.length;i++){
    if(array[i][0]==="a"){
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;*/
return nuevoArray= array.filter(function (elemento){
  return elemento[0]==="a";
})
/* Este metodo con lafuncion nativa del prototype de los objetos array se desarrolla con el argumento detro de la 
funcion que nsotros definimos como un parametro / variable . Se declara y devuelve un nuevo array que contendrá 
los elementos que contengan "a". CAbe señalar que vems dos return en el codigo y eso se debe a que el primer retur corresponde 
a la consigna del ejercicio y el segundo que es la fucnion callback que retorna todo elemento que contenga "a" que se encuentre
inicialmente en el indice "0" que continuara revizando y filtrando a lo largo de toda el array. */

  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
