//funcion suma
function suma(x,y){
  return x+y;
}
//suma(2,4)
//funcion resta
function resta(x,y){
  return x-y;
}
//resta(6,5);

//función multiplicación
function multiplicacion (x,y){
  return x*y;
}
//multiplicacion(3,5);

//función dividir
function dividir (x,y){
  return x/y;
}
/*dividir (21,3);*/

//funcion son iguales
function sonIguales (x,y){
  if (x===y){ return true;
   }
    else{
      return false;
    }
}
 /*sonIguales(1, 1)
 sonIguales ('1', 1)
 sonIguales("casa","casa")*/

/*var uno = "perro";
var dos = "gato";
sonIguales(uno,dos);*/

//funcion tienen la misma longitud 

function tienenLaMismaLongitud (str1,str2){
  if (str1.length===str2.length){
    return true;
      }
  else{
  return false;
}
}
/*tienenLaMismaLongitud("carlos","moises");
tienenLaMismaLongitud("pedro","Antonio");
tienenLaMismaLongitud("","");*/

//funcion menor que noventa.
function esMenorQueNoventa(num){
  if (num<90){
    return true;
  }else{
    return false;
  }
}
/*esMenorQueNoventa(50);
esMenorQueNoventa(100);*/

//funcion mayor que 50.

function mayorQueCincuenta (num){
  if(num>50){
    return true;
  }    else{
    return false;
  }
}
/*mayorQueCincuenta(70)
mayorQueCincuenta(1);
mayorQueCincuenta('49')// Esto se debe al casteo de datos de JS*/
//función obtenerResto
function obtenerResto(x,y){
    return x%y;
    
  }
  /*obtenerResto(7,5);
  obtenerResto (10,1);
  obtenerResto(27,7);
  obtenerResto(3,2);*/
  //función es par
function esPar(num){
    if (num%2===0){
      return true;
    }
      else{
        return false;
      }
  }
  /*esPar(20);
  esPar(15);
  esPar("15");
  esPar("jose");
  esPar("2");// este resultado no arroja error gracias al casteo de datos JS.*/

  //Función es Impar
function esImpar(num){
    if(num%2===1){
      return true;
    }
      else{
        return false;
      }
  }
  /*esImpar(7);
  esImpar(8);
  esImpar("8");//este resultado no arroja error gracias al casteo de datos JS.
  esImpar(2.5);
  esImpar(3.1);
  esImpar(5); */
  function elevarAlCuadrado (num){
  return Math.pow(num,2);
  }
  function elevarAlCuadrado (num){
    return Math.pow(num,2);
    }
    /*elevarAlCuadrado(3);
    elevarAlCuadrado(4);
    elevarAlCuadrado(100);
    elevarAlCuadrado("100")//No da error gracias al casteo de datos de JS.*/
    //Funcion redondear numero.

function redondearNumero (num){
    return Math.round(num);
   }
  //redondearNumero(2.5);

  //Funcion elevar al cubo

function elevarAlCubo (num){
    return Math.pow(num,3);
    }
 //elevarAlCubo(4);
 //function elevar a cualquie potencia 

function elevar (num,element){
    return Math.pow(num,element);
  }
  /* respuestas y otro metodo con declaración de variables.
  elevar(2,3),
  elevar(10,15);
  
  let num=10;
  let exponent =15;
  elevar(num,exponent);*/

  //funcion redondear hacia arriba

function redondearArriba(num){
  return Math.ceil(num);
}
/*redondearArriba(3.1);
redondearArriba(3.9);*/
    
//Funcion numero aleatorio entre 1 y 2

function numeroAleatorio(num1,num2){
    return Math.random(num1,num2);
    
  }
  //numeroAleatorio(1,2)

  //function es positivo

function esPositivo(num){
    if (num>0){
      return "Es positivo";
    }
      else if (num<0){
        return "Es negativo";
        }
          else if (num===0){
            return false;        }
  }
  
  /*esPositivo(32);
  esPositivo(-15);
  esPositivo(0);*/

  //funcion exclamación
  
  function agregaExclamación(str){
    strNueva = str + "!";
    return strNueva
  }
  //agregaExclamación("hola");

  function agregaExclamación(str){
    str = str + "!";
      return str
    }
    agregaExclamación("hola");
    
    //funcion combinar nombres
    function combinarNombres (nombre,apellido){
      return nombre+" "+apellido;
    }
    //combinarNombres("Moisés","Lugo");

    function combinarNombres (nombre,apellido){
        return nombre+" "+apellido;
      }
      combinarNombres("Moisés","Lugo");
      
      //funcion combinar nombres
      function saludar (nombre) {
        return "Hola"+ " " + nombre + " " +"¿Como estás?"
      }
      // saludar ("Moisés")

      //funcion obtener area de un rectangulo

function areaRectangulo (base,altura) {
    return base*altura;
  }
  //areaRectangulo(3,5);

  //funcion perimetro
function perimetro (lado){
    return lado*4;
  }
  // perimetro(100);
  //funcion Area de un triangulo
function areaTriangulo (base,altura){
    return (base*altura)/2;
    
  }
  //areaTriangulo(10,5);

  
//funcion de euro a dolar

function dolar (Euro){
    return Euro*1.2;
  }
  //dolar(25);

  // funcion es vocal

function esVocal (str){
    if (str.length>2){
      return "Dato Erroneo"
    }
      else if (str==="a"||str==="A"||str==="e"||str==="E"||str==="i"||str==="I"||str==="o"||str==="O"||str==="u"||str==="U"){
        return "Es vocal"
      }
    else{
      return "No es vocal";
    }
  }
  //esVocal("M");
  //esVocal("a");