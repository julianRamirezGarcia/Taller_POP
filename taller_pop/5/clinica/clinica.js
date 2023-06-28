const citasPorDocumento = {
    "documento1": {
        nombres: "Nombre1",
        cita: {
        dia: "Lunes",
        fecha: "01/07/2023",
        hora: "10:00 AM"
    }
  },
    "documento2": {
        nombres: "Nombre2",
        cita: {
        dia: "Martes",
        fecha: "02/07/2023",
        hora: "11:30 AM"
    }
  },
};


const documento = prompt("Ingrese su número de documento:");


if (citasPorDocumento.hasOwnProperty(documento)) {
  const cita = citasPorDocumento[documento].cita;
  const nombres = citasPorDocumento[documento].nombres;
  console.log(`Bienvenido/a, ${nombres}. Su cita está programada para el día ${cita.dia} ${cita.fecha}, a las ${cita.hora}.`);

  const cambio = prompt("¿Desea cambiar el día o fecha de su cita? (Sí/No)").toLowerCase();
  if (cambio === "sí") {
    const nuevoDia = prompt("Ingrese el nuevo día de la cita:");
    const nuevaFecha = prompt("Ingrese la nueva fecha de la cita:");
    citasPorDocumento[documento].cita.dia = nuevoDia;
    citasPorDocumento[documento].cita.fecha = nuevaFecha;
    console.log("El cambio de cita ha sido exitoso. La nueva cita está programada para el día", nuevoDia, nuevaFecha);
  } else {
    console.log("Gracias por utilizar el sistema de citas.");
  }
} else {
  console.log("No se encontró ninguna cita asociada a ese documento.");
}