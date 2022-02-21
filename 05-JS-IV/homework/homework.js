// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:

  var Gato = {
    nombre: nombre,
    edad: edad,
    meow: function(){return "Meow!"},
  }
  return Gato;
 
}
/*En este ejercicio lo primero que debemos hacer es crear el objeto mediante 
declaración  de variable llamada gato con g mayuscula por convención. Dentro 
de ella siempre separado  por comas se declara cada porpiedad dentro del objeto.
 Devolvemnos por fuera el objeto llamandolo  por su nombre Gato.
  
 */
function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
     
  objeto[property]= null;
  return objeto;
}
/*Para agregar una propiedad en mi primer lugar debemos 
saber si es es una variable, una función o una string, ya que eso condicionará 
la forma de agregar si será por dot notation o bracket notatio, en este caso como sera una variable 
llamada property, entonces utilizamos bracket notacion sin comillas porque no es un string,
y le asignamos el valor null. Luego devolvemos objeto llamandolo por el nombre objeto.
*/

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
   objeto[metodo]();
}
/*La invocacion de metodos tampoco lleva comillas en la notación bracket, una vez llamada
por su nombre en este caso metodo, lo invocamos como toda función con parntesis () */

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
    
 return objetoMisterioso["numeroMisterioso"]*5;
}
/*En este caso podemos llamar a numeroMisterioso con bracke notacion entre comillas por
ser el nombre string al que estamos llamando o también por dot notation sin comillas por 
convención */

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad];
  return objeto;
  
    }
    /* Primero debemos utilizar la palabra clave delet seguido del objeto al cual
     vamos a llamar unaPropiedad por bracket notation. Por ser una variable pasado
      por argumento entonces no leva comillas. Luego devolvemos el objeto llamandolo
      por su nombre el cual tambien ha sido pasad por argumento*/

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var nuevoObjeto = {
    nombre: nombre,
    email:email,
    password:password,
  }
  return nuevoObjeto;
  }
  /* En primer lugar  declaramos la variable con el nombre que deseemos, luego 
  dentro de ella creamos cad key:value, con el el par clave: valor identicos, sin
  comillas porque son valores pasados por parametros en forma de variables. Si el 
  cas fuese que los parametros son strings, entonces utilizariamos las comillas
  Por ultimo devolvemos el objeto llamando por su nombre.*/

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
    
  if(usuario.email){
    return true;
  }
  return false;
  }
/*  Establecemos un condicional if para determinar si si o si no, si es true retorna 
true si es false retorna false . El return de false se coloca fuera del condicional
if porque primero debemos comprobar true y luego si no se da declaramos el false sin condicion
adicional
Nota: Pensé que por ser condionales comprobando booleanos no se requeria if y quise resolverlo con
simple return usuario.email, pero no corrio el test. Al probarlo pr consola esta ultima retorna 
el email del usuario.
*/


function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if (objeto[propiedad]){
    return true;
  }
  else {
    return false;
  }
   
}
/* debemos comprobar con el condicional if si existe la propiedad,
al llamar la propiedad como una variable del argumento, no incluimos las comillas
el programa ve si existe la propiedad del objeto y si esta devuelve true sin 
necesidad de compararla con nada mas
La razon de la no comparacion es que es un if con booleano.
Retornamos true dentro del condicional y de no cumplirse retornamos false */

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
    
  return usuario.password===password;
}
/* En este caso lo que nos estan pidiendo es que comparemos el password 
que nos están pasando por argumento coincide con el password que tenemos como
valor de la key usuario. Por esta razón solo ddevolvemos el booleano con return 
al comprobarse que password llamado con dot notation, es decir el nombre del key,
lo comparan con la variable pasadapor parametro. NO SE PUEDE USAR EL DONDICIONAL IF!!!
*/
function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword;
  return usuario;
 }
/* El objeto tiene una propiedd llamada password a la cual le vamos a "pisar" 
su value con el valor dato por argumento llamada nnuevaPassword, luego retrnamos el objeto*/


function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  usuario.amigos.push(nuevoAmigo);
  return usuario;

 }
 /*Primero llamamos la propiedad, a la cual le vamos a pushear un nuevo amigo
  pasado por parametro, por esta razón no lleva comillas, luego retrnamos el
   objeto llamado usuario. */

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  //MI NOTA: en este caso no utilizamos el objeto usuario dentro del codigo porque el hecho de
  // utilizar el subindice del objeto del array este sustituye el nombre del objeto "usuario".
  // Tu código:

  /*var usuarios =[usuario1{},usaurio2{},usuario3{}....] 
  usuario.esPremium= ""
  */


for (var i = 0;i<usuarios.length;i++){
  usuarios[i].esPremium=true;
  }
return usuarios;
  
 }
 /*debemos crear un bucle for para recorrer el arreglo, por cada ciclo le asignamos
 a usuarios[i] quien es un usuario en particular un true a su propiedad espremium */

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  //MIS NOTAS: AL estar llamando a usuario.posts estoy llamando al array de objetos
  // P or esta razon luego solo llamo al la propiedad de cada objeto posts con likes,
/*
usuario es un objeto
posts es un array.
post es un objeto
likes es una propiedad que es un numero
sumar todos los likes
*/
var totalLikes = 0;

for (var i = 0;i<usuario.posts.length;i++){
  
    totalLikes = totalLikes+ usuario.posts[i].likes;
}
return totalLikes;
}
/* Primero debemos establecer un totalizador, para ello declaramos una variabble,
con el nombre totalLikes igual a cero, porque asumismo que aun no tenemos Likes
y luego ira sumando en las iteraciones del array al que llaman post.

Sabien do que hay ub array podemos saber su lngitud e iterar por ella con un for,
para ello lo condicionamos con una longitud  de recorrido dada por 
usuario.posts.length.

Si nuestro array es usuario.posts, entonces el indice nos dará cada objeto que 
se encuentra en el arreglo, es decir que el objeto post es usuario.post[i].

Como ya conocemos cada objeto por medio de la iteración y conociendo la propiedad
key o clave llamada likes que tiene como valor un numero, entonces podemos determinar 
una operación matemática que sume los likes porn cada vuelta. Queda asi la operación:
totalLikes= totalLikes+usuario.posts[i].likes ==> donde neuvamente usuarios.posts[i]
es el objeto y .likes me da un numero que por ciclo se ira sumando a medida que el bucle 
avanza por nuestro areglo.
Finalemente retornamos totalLikes con el numero total de likes.

*/

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  
  producto.calcularPrecioDescuento = function calcularPrecioDescuento(){
    return this.precio - (this.precio * this.porcentajeDeDescuento);
  }
 
  return producto;
 }
/* Primero: agregamos el metodo mediante la asignación por dot notation de la función que crearemos
   a continuación.
  
  Segundo: creamos la función con el uso de this. This nos permite tomar el precio y el porcentaje
  del objeto producto ya que esta dentro del objeto.
  El método (funcion) queda this.precio-(this.precio*thisporcentajedDeDescuento).
  
  Tercero: como toda funcion retorna algo, el metodo creado se retorna con la peración matematica que 
  que realizará el descuento.



*/

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
