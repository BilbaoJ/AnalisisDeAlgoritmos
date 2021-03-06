/**
 * 1. comentario de bloque
 */

 // comentario de linea

 /**
 * 1. Comentarios
 * Tipo bloque:
 */
// Comentario de linea
// TODO: Ejemplo de la extención TODO
// BUG:  Ejemplo de la extención TODO

/**
 * 2. Variables
 */
var edad = 10;
let nombre = 10;
const ESTADO_OK = "OK";

/**
 * 3. Tipos de datos
 * - string
 * - number
 * - boolean[true, false]
 * - null
 * - undefined[valor por defeto cuando no se inicializa]
 * - object
 * - array
 */
let est_nombre = "Santiago";
let est_apellido = "Urrego";
let est_edad = 15;
let est_salario = 450.5;
let est_activo = true;
let est_materias = null;
let est_matricula = undefined;
let est_curso_actual = { nombre: "AnÃ¡liss de algoritmos", id: 0001 };
let cursos = ["IntroducciÃ³n", "Algebra", "Ecuaciones", "Fundamentos"];

/**
 * 4. Imprimir en consola
 */
console.log("----4---");
console.log(est_nombre);
console.info(est_nombre, est_edad);
console.error(est_matricula);
console.log();

/**
 * 5. typeof
 *  Verificar el tipo de dato
 */
console.log("----5---");
console.log(typeof est_nombre, typeof est_curso_actual, typeof cursos, typeof est_edad);
console.log();

/**
 * 6. Conversiones
 * parseInt
 * parseFloat
 */
console.log("----6---");
console.log(parseInt("8"));
console.log(parseFloat("8.5"));
console.log();

/**
 * 7. Operadores
 *  >,>=,<,<=,%,++,--
 * == : Compara el valor
 * === : Compara el valor y el tipo
 * !=,!==,
 */
console.log("----7---");
console.log("1" == 1);
console.log("1" === 1);
console.log();

/**
 * 8. Concatenación
 * -> " " + " "
 * -> `${} ${}`
 */
console.log("----8---");
console.log(est_nombre + " " + est_apellido);
console.log(`${est_nombre} ${est_apellido}`);
console.log(parseInt("1") + 1);
console.log(1 + "1");
console.log();

/**
 * 9. Operador ternario
 *  condicion ? true : false
 */
console.log("----9---");
// est_edad = 15
console.log(est_edad > 25 ? "Es mayor que 25 " : "Es menor que 25 ");
console.log(est_edad > 10 ? "Es mayor que 10 " : "Es menor que 10 ");
console.log();

/**
 * 10. Sentencias de condición
 */
//If simple
if (est_edad > 25) {
  console.log("Es mayor que 25 ");
}

// If - else
if (est_edad > 10) {
  console.log("Es mayor que 10 ");
} else {
  console.log("Es menor que 10");
}
switch (est_edad) {
  case 10:
    break;
  case 15:
    break;

  default:
    break;
}

/**
 * 10. Bucles - itereaciones
 */
// for
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
// while
while (est_edad > 10) {
  est_edad--;
}
// do-while
est_edad = 15;
do {
  est_edad--;
} while (est_edad > 10);

/**
 * 12. Funciones
 */
function imprimirEstudiante() {}
const imprimirCurso = () => {};
