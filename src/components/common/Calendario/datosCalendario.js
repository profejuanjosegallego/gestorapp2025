// src/components/common/Calendario/datosCalendario.js
export const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
export const HORAS = Array.from({ length: 7 }, (_, i) => `${10 + i}:00 - ${11 + i}:00`); // 10am - 5pm

export const calendario = [DIAS, HORAS]; // Mantenemos la exportación original