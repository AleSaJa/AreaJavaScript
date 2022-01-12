/*Ejercicio Realizado en Clase en Equipo*/
//Función Resctangulo

function areaRectangulo(b,a){
    alert("El Área del rectángulo es: "+(b*a));
}

areaRectangulo(10,4);

//funcion de area triángulo
function areaTriangulo(){
    var base = 2;
    var altura = 5;
    var resTriangulo = (base*altura)/2;
    alert("El area del triángulo es: " + resTriangulo);
}
areaTriangulo();

//funcion de area circulo
function areaCirculo(radio){
    var resCirculo = Math.PI*(radio**2);
    console.log("El área del círculo es: " + resCirculo);
}
areaCirculo(20);

//funcion de area rectángulo
function areaRectangulo(b=10, a=4){
    alert("El Área del rectángulo es: "+(b*a));
}
areaRectangulo();


//Códigos Realizados en Clase

//Primer Comentario en JavaScript

/*
alert("Hola Mundo con JavaScript");

console.log("Hola Mundo con JavaSript en Consola");

var nom = "Alejandro";
var ap = "Salcedo";
var edad = 24;

console.log(nom+" "+ap+" tengo "+edad+" años.\nMensaje desde console");

alert("Mi nombre es "+nom+" "+ap+" tengo "+edad+" años.\nMensaje desde un alert");
*/
/*
//Sintaxis Basica de una Función

function funcion(parametros){
    Expresion;
}

//Expresion de funcion

function saludar(){
    alert("Hola mundo desde una Función");
}

saludar();

//Expresion de Funcion

var hola = function(){
    alert("Hola mundo desde una Función, asignada a una variable");
}

hola();

//Función sin parametros

function sum(){
    var num1 = 5;
    var num2 = 6;
    var suma = num1 + num2;
    alert("La suma de la función sin parametros es: "+suma);
}

sum();

//Función con parametros

function resta(num1,num2){
    num1 = 8;
    num2 = 5;
    rest = num1 - num2;
    alert("La resta de la función con parametros es: "+rest);
}

resta();

//Otra Función con Parametros

function square(num1){
    var res = num1 * num1
    alert("El cuadrado del numero es : "+res);
}

square(7);

//Función Promter

function Prompter(){
    var input = prompt("Buenos días, ¿Cuál es tu nombre? ");
    alert("Pedro que gusto de verte "+input);
}

Prompter();
*/


/*
//OnClick

function check(){
    var input = confirm("Quieres ir a BootStrap");
    if (input){
        alert("Te redirecciono");
        window.location="https://getbootstrap.com/docs/5.1/components/button-group/";
    }else{
        alert("Nos vemos despues");
    }
}

*/
/*
//getElementById

function cambio(nuevo){
    document.getElementById("parrafo").style.color = nuevo;
}


function accion(tipo){
    if (tipo=="ocultar"){
        document.getElementById("botones").style.display = 'none';
    }else{
        document.getElementById("botones").style.display = '';
    }
}
*/
