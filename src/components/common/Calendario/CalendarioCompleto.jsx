import "./CalendarioCompleto.css";

export function CalendarioCompleto({ espacio, onReserveSlot }) {
  // Días y horas que se mostrarán en el calendario.
  const DIAS = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  const HORAS = [
    "08:00 am - 09:00 am",
    "09:00 am - 10:00 am",
    "10:00 am - 11:00 am",
    "11:00 am - 12:00 pm",
    "12:00 pm - 01:00 pm",
    "01:00 pm - 02:00 pm",
    "02:00 pm - 03:00 pm",
    "03:00 pm - 04:00 pm",
    "04:00 pm - 05:00 pm",
    "05:00 pm - 06:00 pm",
  ];

  // Función para verificar si una celda ya está reservada.
  const isReserved = (dia, hora) => {
    return espacio.reservas.some((r) => r.dia === dia && r.horario === hora);
  };

  // Maneja el clic en la celda (si no está reservada).
  const handleClick = (dia, hora) => {
    if (!isReserved(dia, hora)) {
      onReserveSlot({ dia, hora });
    }
  };

  return (
    <table className="calendario-completo">
      <thead>
        <tr>
          <th className="header-cell">Hora / Día</th>
          {DIAS.map((dia) => (
            <th key={dia} className="header-cell">
              {dia}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {HORAS.map((hora) => (
          <tr key={hora}>
            <td className="hora-cell">{hora}</td>
            {DIAS.map((dia) => {
              const reservado = isReserved(dia, hora);
              return (
                <td key={`${dia}-${hora}`} className="cell">
                  <button
                    className={`btn-slot ${
                      reservado ? "reserved" : "available"
                    }`}
                    disabled={reservado}
                    onClick={() => handleClick(dia, hora)}
                  >
                    {reservado ? "Reservado" : "Reservar"}
                  </button>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
