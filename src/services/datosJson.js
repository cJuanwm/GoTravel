export let datosJson = Array(
  {
    id: 1,
    nombre: "Piscina Escuela",
    descripcion: "Piscina abierta para niños y acompañantes",
    foto: Array("foto1.jpg", "foto2.jpg"),
    horarios: "Lunes-Viernes 10:00 am - 06:00 pm",
    reservas: Array(
      {
        id: 1,
        dia: "Lunes",
        horario: "10:00 am - 11:00 am",
      },
      {
        id: 2,
        dia: "Lunes",
        horario: "01:00 pm - 02:00 pm",
      }
    ),
  },
  {
    id: 2,
    nombre: "Campo de Golf",
    descripcion: "Campo de Golf para residentes",
    foto: Array("foto1.jpg", "foto2.jpg"),
    horarios: "Lunes-Sabado 09:00 am - 08:00 pm",
    reservas: Array(
      {
        id: 1,
        dia: "Miercoles",
        horario: "10:00 am - 02:00 pm",
      },
      {
        id: 2,
        dia: "Miercoles",
        horario: "03:00 pm - 07:00 pm",
      },
      {
        id: 3,
        dia: "Viernes",
        horario: "04:00 pm - 08:00 pm",
      },
      {
        id: 4,
        dia: "Sabado",
        horario: "12:00 pm - 04:00 pm",
      }
    ),
  },
  {
    id: 3,
    nombre: "Cancha de Futbol",
    descripcion: "Cancha de Futbol disponible para uso publico",
    foto: Array("foto1.jpg", "foto2.jpg"),
    horarios: "Viernes-Domingo 09:00 am - 07:00 pm",
    reservas: Array(
      {
        id: 1,
        dia: "Viernes",
        horario: "05:00 pm - 07:00pm",
      },
      {
        id: 2,
        dia: "Sabado",
        horario: "09:00 am - 01:00 pm",
      },
      {
        id: 3,
        dia: "Sabado",
        horario: "02:00 pm - 04:00 pm",
      },
      {
        id: 4,
        dia: "Sabado",
        horario: "05:00 pm - 07:00 pm",
      }
    ),
  },
  {
    id: 4,
    nombre: "Zona Spa",
    descripcion: "Zona para relajarse con la familia y conocidos",
    foto: Array("foto1.jpg", "foto2.jpg"),
    horarios: "Lunes-Sabado 09:00 am - 08:00 pm",
    reservas: Array(
      {
        id: 1,
        dia: "Lunes",
        horario: ":00 am - 11:00 am",
      },
      {
        id: 2,
        dia: "Lunes",
        horario: "01:00 pm - 02:00 pm",
      }
    ),
  }
);
