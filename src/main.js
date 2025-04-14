
const proyecto = require("./Proyecto");
const { Tarea, TareaCompuesta } = require("./Tareas");
const { Minima, Media, Maxima } = require("./Complejidad");

const t1 = new Tarea("1", 3, new Minima());

const subtarea22 = new TareaCompuesta("2.2", 8, new Maxima(), [
  new Tarea("2.2.1", 3, new Media()),
  new Tarea("2.2.2", 4, new Maxima())
]);

const t2 = new TareaCompuesta("2", 5, new Minima(), [
  new Tarea("2.1", 6, new Media()),
  subtarea22
]);
// La T2 pasa de Minima -> Media -> Maxima
t2.complejidad = t2.complejidad.siguienteComplejidad().siguienteComplejidad();

const t3 = new TareaCompuesta("3", 7, new Minima(), [
  new Tarea("3.1", 6, new Media()),
  new Tarea("3.2", 3, new Maxima())
]);
// La T3 pasa de Minima -> Media
t3.complejidad = t3.complejidad.siguienteComplejidad();

proyecto.agregarTarea(t1);
proyecto.agregarTarea(t2);
proyecto.agregarTarea(t3);

proyecto.mostrarTareas();

console.log(`\nDuración Total de la Tarea 1: ${t1.getDuracion()} DÍAS.`);
console.log(`Duración Total de la Tarea 2: ${t2.getDuracion()} DÍAS.`);
console.log(`Duración Total de la Tarea 3: ${t3.getDuracion()} DÍAS.\n`);
console.log(`Duración Total: ${proyecto.getDuracion()} DÍAS.`);
console.log(`\nCosto total: $${proyecto.getCostoTotal()}`);
