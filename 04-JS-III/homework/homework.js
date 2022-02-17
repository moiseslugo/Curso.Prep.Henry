// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];

  // Devuelve el elemento en el indice cero [0]

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código: 
  return array[array.length-1];
  
}// si restamos uno a length, tndremos el indice del ultimo elemento del array.


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;

}//.length da el largo del array es decir la cantidad de elementos que hay dentro de el 


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
 //Generalemente para cuado nos piden recorrer la matrriz utilizamos for... o while.
 
 var arrayMasUno = [];
 for (var i = 0; i<array.length; i++){
   arrayMasUno[i]= array[i]+1;
    }
    return arrayMasUno;
  }
  // debo intentarlo con push!!!!
  /* La solucion a este ejercicio es primero creamos el nuevo array que hemos llamado arrayMAsUno, 
     este atrray albergará los nuevos elementos incrementados en uno. Luego el ciclo for va a iterar
     en la matriz a lo largo de toda su longitud, sumando en cada vuelta uno al valor del indice y asignandselo
     al nuevo array de forma directa. Finalmente devolvemos el nuevo array.
             
     */


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}// empujamos el elemento pasad por argumento al final del array.



function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
/*agregamos el elemento por medio de unShift que lo que hace es rcibir el valor a agregar
 por parametro dentro de sus parentesis que ve dado por el argumento de la función.

 */


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
 
}/*En este caso hemos incorporado la nueva fincion nativa de JS llamada "Join" al ser una funcion lleva
 parentesis y dentro de los parentesis hemos colocado un string con espacio para que no se junten las 
 palabras a unir. */


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
 
  for ( var i = 0; i<array.length; i++){
        if(array[i] === elemento){
          return true ;
        }
        
        }
        return false; /*cuando queremos retornar false después que se haya cumplido el bucle, 
        este debe colocarse fuera del bucle*/
  
  
  }/* En la solucion de este ejercicio encontramos que return esta dentro del bucle for, esto se debe a que 
  mientras no se cumpla la condicion de igualdad seguirá itrando hasta ser true, de darse la igualdad entonces 
  será true y retornará true. De no cumplirse el true, entonces devolveremos false fuera del ciclo "for".*/ 



function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (var i = 0; i<numeros.length;i++){
    suma = suma + numeros[i];
  }
  return suma;
 
}/*Creamos primero una variable que contendra la suma, le damos valor "0" para iniciarla
  Luego corremos un bucle "for" con condiciones de 0 y limite el largo del array, dentro el bucle 
  colocamos una pracion matematica donde la variable creada sume el valor del indice de cada ciclo. 
  esto dara como resultado que todos los valores se vayan sumando uno a uno por cada vuelta que de elm ciclo
  hasta cumplirse la condicion de parada es decir i<numeros.length. Finalmente retornamos el valor de la
  variable llamada suma fuera del ciclo "for"
*/



function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  for (var i = 0; i<resultadosTest.length; i++){
    suma = suma + resultadosTest[i];
  }
  return suma/resultadosTest.length
} 
/*La solución de este ejercicio es primero creando una variable a la que llamamos suma iniciada en cero 
porque no ha habido ninguna suma aun. 
Luego establezco un ciclo "for" con condición de parada de largo del argumento de la funcion, esto es 
para recorra todo el array. Dentro del ciclo "for" realizamos una pracion matematica que por cada vuelta sume
cada indice dentro del arraay, con esto conseguimos la suma total de las notas de los llamados resultadosTest.
Teniendo este resultado podemos calcular mas adelante el promedio.
Cumplido el bucle "for" y fuera de ste retornamos una operación matematica que divide la suma de los resultadosTest
entre resultaltadosTest.length, este valor es igual a la cantidad de datos contenidos en en array.
 Esta operacion dará el promedio. 
*/



function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
   
    var numMayor = numeros[0];
    for (var i =0; i<numeros.length; i++){
      if (numeros[i]> numMayor){
        numMayor = numeros[i];
       
      }
    }
    return numMayor;
} //En este ejercio el truco esta en comparar el mayor valor siempre con el que definimos en principo como mayor.
/* La solucion a este ejercicio es primero declarando una variable que es igual al primer numero del array, 
esto porque asumimos que el primer numero es mayor( indistintamtne no lo sea), Luego nuevamente recorremos 
el array con condicion de parada del ultimo numero de esta, eso lo logramos mediante array.length.
 Dentro del bucle for creamos un condicional "if" donde comparamos la variable creada con el valor dado 
 por el indice del ciclo, si se cumple que el nuevo valor es mayor que el de la variable de incio, entonces 
 esta reemplaza el valor de  la variable por el nuevo valor.  Cumplido el bucle la opración habrá guardado
  el valor mayor.
 Fuera del ciclo for devolvemos el valor de la variable creada con el resultado de la operación de comparación
  que se  encontraba dentro del bucle.
*/



function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
 
 var producto = 1; 
  if (arguments.length === 0){
   return 0;
 }
    for (var i = 0; i<arguments.length;i++){
        producto = arguments[i]*producto;
 }
 return producto;

  }
  /* Para entender este jercio primero debemos comprender que hace "arguments", Esta es una propiedad nativa de 
  los objetos de JS. y lo que hace es que cuando es llamada esta devuelve la cantidad de argumentos que estan
   dentro del objeto
   Entonces creamos una variable llamada producto iniciada en "1", Se inicia en 1 porque en multiplicacion el 
   producto de algo por "0" es cero y el prducto de algo por "1" es igual al producto, entonces podremos
   utilizar esta variable dentro de la operación matematica de multiplicación que vamos a utilizar mas 
   adelante dentro del bucle.
   Seguido para responder al enunciado del problema donde nos dice que si NO se pasa argumento el valor  debemos 
   devolver "0", esto por logica es porque si no hay argumentos, no hay producto.
   Cumplida esta condicion debemos recorrer el array con el statement "for", con condicion de recorrido
   completo del array, dentro del for hacemos una operación matematica de multiplicación de cad elemento.
   La operación va a asignar el resultado de la multiplicación del elemento en el indice[i] sera adjudicada a la 
   la variable creada, entonces ella tomará el nuevo valor del producto, hasta culminar el ciclo for.
   Finalizado el ciclo, devlvemos el valor de la variable creada por fuera del ciclo for.
  
  */
 


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var nuevoArreglo = [];
  
for (var i = 0; i<arreglo.length;i++){
  if( arreglo[i]>18){
    nuevoArreglo.push(arreglo[i])
  }
}
return nuevoArreglo.length;
}
/* Para solucion de este problema, creamos una variable con nombre nuevoArreglo, esta
tomar los valores mayores a 18.
establecemos un bucle "for" con condiciones de recorrido completo del arreglo dado por argumento
de la funcion.
Dentro del bucle colocamos un coducinbal if que establece que si el valor en el indice dado por 
 el ciclo delo "for" es mayor que 18, este debe ser empujado a el nuevo array que es el array vacio declarado
 como variable.
 Terminado el bucle, fuera de este retornamos el largo de el nuevoArreglo con la propiedad .length,
 ya que la longitud será la cantidad de datos que estan por encima de 18.
*/


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  //EJERCICIO SIN DUDAS **********
  if (numeroDeDia===7 || numeroDeDia===1 ){
    return "Es fin de semana";
  }
  return "Es dia Laboral";
  
} 
/*Para la  solucion de este ejercicio primero establecemos la condicion de comparacion de los 
los  numeros correspondientes a los dias del fin de semana cn un condiconal "if", si se cumple
cualquiera de las dos condiciones dada, dentro del mismo for se devuelve la afirmación fin de semana. 
Luego si no se cumple ninguna de las dos condiciones el programa salta al proximo return que responde 
que es dia laboral.
*/


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var nuevaStr = n.toString();
 if ( nuevaStr[0] ==="9"){
   return true;
 }
 return false;
  
}
/*Este ejercicio recibe solo un numero este pued ser de una cifra a infinitas. Por lo tanto 
 lo que debemos buscar es separar el primer digito del resto de la cadena. Por esta razon como JS no 
 puede separar numeros, mas si cadenas con sus propiedades de los objetos nativas, lo primero que 
 debemos hacer convrtir el numr en una cadena con .toString, guardarlo en una nueva variable creada 
 para tal fin a la que llamaremos nuevaStr, esta variable la vamos a poder compar luego con un condiconal 
 que establece si hay igualdad estricta entre el primero valor de la cadena creada en su primer indice con 
 un string o cadena equivalente a "9" entre comillas, esto ultimo importnte por 
 la comparacion es entre strings y no numeros (peras con peras manzanas con manzanas). 
 Si la condicojn es true , retorna true dentro del mismo condicional, si no lo es, retornamos false fuera
 del condiconal.

*/


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  for ( var i = 0; i<arreglo.length-1;i++){
    if (arreglo[i]!==arreglo[i+1]){
      return false;
    } 
  }
  return true;
    } // no se compara con si mismo desde cero porque no tiene sentido 
    /* La solucion de este ejercicio es mediante el recorrido del arreglo en busca de los datos mediante un 
     bucle "for" , lo establecemos con valor de incion cero y recorrdio completo del arreglo. Una vez iniciado 
     el bucle debemos comparar con un "if"  si cada valor es igual al otro, para ello comparamos con un comparador
     NOT, no es igual, del primer dato dado por el indice dado por el ciclo for comparado con el segundo, dado
     pr la suma de "1" al indice. ¿Que quiere decir esto? Que cuando iteramos por primera vez se compara el primer
    dato con el segundo, si son distintos termina con el bucle mediante return que devolverá false por que asi se 
    lo hemo pedidos ( es decir ya que es true entonces false). En cambio si los datos son iguales este iterara 
    de nuevo y asi continúa hasta culminar el ciclo, Si no encontro cumplir con un true dado porque 
    son diferentes los valores, entonces sale del bucle for y ejecuta la linea de codigo que devuelve "true".
       */


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];
  for(var i = 0; i<array.length; i++){
    if (array[i]==="Enero"||array[i]==="Marzo"||array[i]==="Noviembre"){
          nuevoArray.push(array[i])
            }
        
    }
  if (nuevoArray.length<3){
    return "No se encontraron los meses pedidos";
  }
    else {
      return nuevoArray
    }
  
  }
  /* En este ejercicio hay dos etapas para su solución una primera etapa donde se declara
  la variable que devolverá el array con los meses enunciados. Declaramos un statement "for " 
  con condiciones de recorrido completo en que alojaremos un condicional if que compara los meses
  solicitados con el dato alojado en cada indice del array itrado dentro del for. 
  Si el if encuentra coincidencia es decir "true", es empujado el dato a la variable declarada que es
  un string. Si no hya coincidencia cumple cn las iteraciones y sale del for y ejecuta la linea siguuiente.
  
  Aca encontramos la segunda etapa donde se ecjecuta nuevamente un if que ocnidionara al nuevoArray declarando 
  que si este es menor a tres (los tres meses)entonces debe devolver la cita "no se encotraron los meses pedidos",
  Si este condicional es false es decir no se cumple, entonces continaua a la proxima linea de codigo y ejecuta
  la devolución del nuevo array en un else al final de todo el codigo con los tres meses solicitados.
  
  */
  


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoArray = [];
  for (var i = 0; i<array.length;i++){
    if( array[i]>100){
      nuevoArray.push(array[i]);
    }
  } 
  return nuevoArray;
}
/* Se declara un nuevo array que llamaremos nuevoArray eque alojara los datos que se encuentren dentro del rango
planteado.
Luego declaramos un statemente for para recorrer toda la matriz con condicionales de la propiedad longitud.
Dentro de este statement cramos un condicional if que comparará el valor dado por el indice del array preguntando 
si es mayor a 100. Si se cumple debe ser empujado por medio de push al nuevo array, todo esto contenido dentro
for.
Una vez cumplidas las iteraciones retornamos el nuevoArray .

*/


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
 
  var nuevoArray = [];
  var suma = numero;
  for ( var i = 0; i<10; i++){
      if(suma===i){
      break;//primera condicion que indica al programa que debe salir del  "for" si se cumple la condición
    }
    else{
      suma = suma +2;
      nuevoArray.push(suma)
    }// Si no se cumple el break, continua el ciclo "for" empujando valores al nuevoArray.
        
  }
  if(i<10){
    return "Se interrumpió la ejecución"
  }//Si se cumpla la condicion don se ejecuta el break entonces el codigo tiene dos nuevas alternativas o retorna la razón del break.
  else{
    return nuevoArray;
  }// O retorna el nuevo array.



  
}/*Resumiendo este ejercicio, cuando consideramos el for en primero lugar como no es un array debemos
 tomar en cuenta  que no vamsos a necesitar el array.length, luego debemos tener cuidado de como fucnciona
 el break statement  va a salir del ciclo "for" donde le esperan dos nuevas condiciones, la primera es 
 si no alcanzo a hacer los diez ciclos  es porque se cumplo el break statement o devuelve con else el 
 nuevoArray aramado con el push de la suma*/ 


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoArray = [];
  var suma=numero;
  for(var i = 0; i<10;i++){
       if (i===5) {
         continue;}
       else{
         suma = suma+2;
         nuevoArray.push(suma);
       }
    

  }
  return nuevoArray;

  
 
}/* repaso de este ejercion: En este caso al igual que el ejercicio anterior declaramos dos variables, 
   una para el nuevo array que va a recibir y otra para las sumas que iremos empujando hacia el nuevoArray.
   La diferencia principal está en que "continue" obliga a saltar la iteración bajo la condicion dada. 


*/


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
