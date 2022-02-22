// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

function Usuario(opciones){

this.usuario = opciones.usuario;
this.nombre = opciones.nombre;
this.email = opciones.email;
this.password = opciones.password;
}
Usuario.prototype.saludar = function(){
  return "Hola, mi nombre es " + this.nombre;
};
return Usuario;

}
/* En primer lugar creamos una funcion constructora con el nombre Usuario (en mayuscula ). 
  La funcion consructora recibe por argumento un oobjeto llamado opciones, este objeto, contiene las propiedades
  llamadas usuario, nombre, email y password quiere decir que para conocer sus valores lo que debo hacer es establecer
  dentro de la funcion constructora cada elemento con el nombre de la propiedad solicitada y esta tendra el valor que el 
  key:value de cada propiedad contiene. es decir si quiero el primer elemento que es usuario, definimos this.Usuario, que 
  será el usuario que llama al objeto "Usuario" y se le asigna el valor opciones.usuario. De esta forma se repite 
  la asignación de cada una de las prpiedades del constructor.

  Luego debemos construir el metodo solicitado fuera de la funcion constructora, es decir en su prototipo, para
  ello lo asignamos por medio de el llamado del prototipo del usuario (Usuario.prototype) al que luego le crearmos
  un metodo (con .saludar) quedando Usuario.prototype.saludar y la asignacion directa con (=) a la funcion que será el metodo,
  para finalmente quedar Usuario.prototype.saludar= function(){return "Hola, mi nombre es  "+this.nombre;}
  
  Observación, como el metodo estará en prototype, este no será visible en los objetos que construya el constructor Usuari,
  pero estrán disponibles a traves de su prototye y por tanto podra ser invocado. 

  ¿¿¿Siempre que queremos crear un metod para las objetos del constructo utilizamos prototype!!!




*/

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar= function(){
    return "Hello World!";
  }
 
}
/* Aca añadimos un nuevo metodo al prototype del Constructor  mediante dot notation, primero se coloca
 el Constructor que esta mayusculas seguido de punto para llamar al protipo con la  palabra clave prototype,
 seguido por punto y el nombre del metodo que vamos a agregar que en este caso es "saludar", quedand
 entonces Constructor.prototype.saludar, luego le asignamos de manera directa con igual la funcion sin nombre porque ya se 
 la estamos dand por medio del dot notaction. Declaramos la funcion seguido d parentesis luego abrimos 
 corchetes y dento de los corchetes retornamos el texto solicitado. Listo!     
 
 
 
 */

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function(){
    var stringInvertida = "";
    for (i= this.length -1; i>=0; i--){
      stringInvertida =stringInvertida + this[i]; 
    }
    return stringInvertida;
  }
}
/* Primero debemos declarar la funcion mediante el modelo de objeto prototype,
 esto agregaría el metodo al prototype de String quien es el objeto.
 
Luego creamos la funcion qu sera el metodo. Dentro de la funcion iniciamos una nueva 
variable llamada stringInvertida, esa variable será la que vamos a retornar cuando tenga
la palabra invertida armada dentro.

Para invertir la palabra consideramos el string como un array y utilizamos un metodo for para 
recorrer cada caracter que luego armarará la palabra al revés dentro de la nueva variable llamada stringInvertida.

El for lo vamos a diseñar de tal forma que recorra al revés el string por lo tanto estas son las consideraciones:

1. declaramos la variable i que se inicie en (this.length -1) ¿Porque? Como no conocemos la palabra que 
vamos a "voltear" y sabemos que la utilizaremos como un método dentro de prototype, nos referimos al this dentro del objeto.
Luego si conocemos su longitud menos 1 sabemos que esa es la posicion del indice del string visto como un array, 
donde comenzaremos a regresar.

2. Establecemos la condicion de frenado del bucle de la variable i, y decimos que debe ser mayor o igual que 
0, es decir i>0, Porque ese valor de indice corrsponde a la primera letra de la palabra que luego será la última
 en nuestra nueva string.

3. En vez de incrementar vamos a decrementar con i--.

Armado el ciclo que recorre al revés la string, podemos entonces hacer el codigo que va a "armar la 
nueva string " y eso se hace tomando en cuenta que cada ciclo del bucle irá pisando la nueva variable creada, 
es decir stringInvrtida hasta detener el bucle. Esto sucede porque la variable inicializada le va a sumar un nuevo elemento al nuevo
string pr cada vuelta.

finalemente retornamos el string.
 
 
 
 
 */

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre,apellido,edad,domicilio){
      this.nombre=nombre
      this.apellido=apellido,
      this.edad=edad,
      this.domicilio=domicilio,
      
      this.detalle = function(){
        return{
          Nombre:this.nombre,
          Apellido:this.apellido,
          Edad:this.edad,
          Domicilio:this.domicilio
        }
      }
    }
  }

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  var juan = new Persona(nombre, apellido, edad, dir)
  return juan;
}
/* Puede utilizarse con los strings portados o con las variables */
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos= function (){
    return this.nombre+ ", "+this.edad+" años";
  }
  
 
 
}

  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
