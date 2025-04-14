

const { Minima } = require("../src/Complejidad.js");
const proyecto = require("../src/Proyecto.js");
const { Tarea, TareaCompuesta } = require("../src/Tareas");

describe("Duracion Proyecto", () => {
  let t1;
  let t2;
  let t3;

  beforeEach(() => {
    t1 = new Tarea("1", 3, new Minima());
    t2 = new TareaCompuesta("2", 5,new Minima(), [
      new Tarea("2.1", 6, new Minima(),),
      new TareaCompuesta("2.2", 8, new Minima(), [
        new Tarea("2.2.1", 3, new Minima()),
        new Tarea("2.2.2", 4, new Minima()),
      ]),
    ]);
    t3 = new TareaCompuesta("3", 7, new Minima(), [new Tarea("3.1", 6, new Minima()), new Tarea("3.2", 3, new Minima())]);

    proyecto.agregarTarea(t1);
    proyecto.agregarTarea(t2);
    proyecto.agregarTarea(t3);
  });

  afterEach(() => {
    proyecto.cleanTareas();
  });

  test("La duración total de la tarea 1 debería ser 3 y el costo 300", () => {
    expect(t1.getDuracion()).toBe(3);
    expect(t1.getCosto()).toBe(300);
  });

  test("La duración total de la tarea 2 debería ser 26 y el costo ", () => {
    expect(t2.getDuracion()).toBe(26);
    expect(t2.getCosto()).toBe(2600);
  });

  test("La duración total de la tarea 3 debería ser 16 y el costo ", () => {
    expect(t3.getDuracion()).toBe(16);
    expect(t3.getCosto()).toBe(1600);
  });

  test("La duración total del proyecto debería ser 45", () => {
    expect(proyecto.getDuracion()).toBe(45);
  });
});
