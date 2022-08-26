// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var x= array.length;
  for (var y =0; y<x; y++){
    var j= array[y]; 
    array[y]=j+1;
  }
  return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push (elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift (elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var x= palabras.length;
  var k=""
  for (var z =0; z<x-1; z++){
    var j= palabras[z]; 
    palabras[z]=j+" ";
    console.log(palabras)
  }
  for (var y =0; y<x; y++){
   k=k+palabras[y]
  }
  return k
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var x=0
  var b= array.length;
  for (var y=0; y<b ; y++){
    if (array[y]===elemento){
      x=x+1
    }
  }
  if (x>0){
    return true
  } else {
    return false
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var j=0
  var x= numeros.length;
  for (var y =0; y<x; y++){
    j=j + numeros[y]
  }
  return j
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var j=0
  var x= resultadosTest.length;
  for (var y =0; y<x; y++){
    j=j + resultadosTest[y]
  }
  return j/x

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var j=0
  var x= numeros.length;
  for (var y =0; y<x; y++){
    if (numeros[y]>j){
      j=numeros[y]
    }
  }
  return j
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var x= arguments.length;
  if (x===0){
    return 0
  }
  if (x===1){
    return arguments[0]
  } else if (x>1){
    var j=1
    for (var y =0; y<x; y++){
      j=j * arguments[y]
    }
    return j
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var j=18
  var a=0
  var x= arreglo.length;
  for (var y =0; y<x; y++){
    if (arreglo[y]>j){
      a = a+1
    }
  }
  return a

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia>1 && numeroDeDia<7){
    return "Es dia Laboral"
  }
  if (numeroDeDia===1 || numeroDeDia===7){
    return "Es fin de semana"
  }

} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var x = -1
  var j = n
  do { 
    j = Math.floor(j/10)
    x=x+1

  } while (j>0)
  var k = Math.floor(n/(10**x))
  if (k===9){
    return true;
  } else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var a =0
  var x = arreglo.length;
  for (var y = 0; y<x; y++){
    if (arreglo[y]===arreglo[x-1]){
      a = a+1
    }
  }
  if (a===x){
    return true;
  } else {
    return false;
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var a =0
  var b =0
  var c =0
  var z =[]
  var x = array.length;
  for (var y = 0; y<x; y++){
    if (array[y]==="Enero" || array[y]==="Marzo" || array[y]==="Noviembre"){
      if (array[y]==="Enero"){
        a = a+1
       }
      if (array[y]==="Marzo"){
        b = b+1
      }
      if (array[y]==="Noviembre"){
        c = c+1
      }
      z.push(array[y])
    }
  }
  if (a>0 && b>0 && c>0){
    return z
  } else {
    return "No se encontraron los meses pedidos";
  }
 
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var array2 = []
  let a = 0
  let x = array.length
  for (let y =0; y<x; y++){
    if ( array[y] >100){
      array2[a]=array[y]
      a=a+1
    }
  }
  return array2

}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var z=[]
  var y=numero;
  var j=0;
  var q = y+20
  while (y<q) {
    y=y+2;
    z.push(y)
    j = j + 1
    if (y===j){
      break
    }
  }
  if (y===j){
    return "Se interrumpió la ejecución"
  } else {
    return z
  }
}



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var z=[]
  var y=numero;
  var j=0;
  var q = y+20
  while (y<q) {
    y=y+2;
    
    j = j + 1
    console.log(y)
    console.log(j)
    if (j===10){
      continue
    }
    z.push(y)
  }
    return z

}


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
