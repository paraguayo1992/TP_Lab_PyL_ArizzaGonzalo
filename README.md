Trabajo práctico 1

Sistema de Gestión de Tareas con Costos y Complejidades

📌 Descripción:

Este proyecto es un sistema de gestión de tareas que calcula costos basado en:

Duración de la tarea.

Complejidad (Mínima, Media, Máxima).

Arriba por subtareas (si hay más de 3).

Desarrollado con JavaScript, sigue principios de POO y programación funcional, evitando condicionales mediante estrategias y composición.

🚀 Características principales

✅ Jerarquía de Tareas

Tareas simples: Duración y costo básico.

Tareas compuestas: Agrupan subtareas con gastos generales del 4% si tienen más de 3.

✅ Cálculo de costos

Base de valor: Configurable $100.

Complejidades:

Mínimo: Sin modificación.

Medios: +5%.

Máxima: +7% (y $1000 extra por día si la duración > 10).

✅ Principios de Diseño

POO: Herencia (TareaCompuesta → Tarea), polimorfismo (getCosto()).

Funcional: Funciones puras, métodos reduce/forEach.

Sin condicionales: Se usan objetos (COMPLEJIDADES) para evitar if/switch.

✅ Instalación Clonar/Inicializar:

bash Copiar git clone cd proyecto-tareas npm install Ejecutar:

bash Copiar

✅ npm start # Muestra tareas de ejemplo y costos

Codigo: 1 - Duracion: 3 - Costo: $300 Codigo: 2 - Duracion: 5 - Costo: $2764 Codigo: 2.1 - Duracion: 6 - Costo: $630 Codigo: 2.2 - Duracion: 8 - Costo: $1599 Codigo: 2.2.1 - Duracion: 3 - Costo: $315 Codigo: 2.2.2 - Duracion: 4 - Costo: $428 Codigo: 3 - Duracion: 7 - Costo: $1686 Codigo: 3.1 - Duracion: 6 - Costo: $630 Codigo: 3.2 - Duracion: 3 - Costo: $321

Duración Total de la Tarea 1: 3 DÍAS. Duración Total de la Tarea 2: 26 DÍAS. Duración Total de la Tarea 3: 16 DÍAS.

Duración Total: 45 DÍAS. Costo Total: $4750

✅ npm test # Ejecuta pruebas unitarias (Jest)

gestion-edu@1.0.0 prueba broma

PASS test/Proyecto.test.js Duracion Proyecto √ La duración total de la tarea 1 debería ser 3 y el costo 300 (5 ms) √ La duración total de la tarea 2 debería ser 26 y el costo (1 ms) √ La duración total de la tarea 3 debería ser 16 y el costo (1 ms) √ La duración total del proyecto debería ser 45 (1 ms)

Conjuntos de pruebas: 1 aprobado, 1 en total Pruebas: 4 aprobadas, 4 en total Instantáneas: 0 en total Tiempo: 0,773 s, 1 s estimado Se ejecutaron todos los conjuntos de pruebas.
