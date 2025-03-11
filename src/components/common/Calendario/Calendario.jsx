import { datosJson } from "../../../services/datosJson";
import "./Calendario.css";

const daysOfWeek = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const parseTime = (time) => {
  const [hour, minute, period] = time.match(/(\d+):(\d+)\s?(am|pm)/i).slice(1);
  let hour24 = parseInt(hour, 10);
  if (period.toLowerCase() === "pm" && hour24 !== 12) hour24 += 12;
  if (period.toLowerCase() === "am" && hour24 === 12) hour24 = 0;
  return `${hour24}:${minute}`;
};

const generateTimeRange = (start, end) => {
  const startHour = parseInt(start.split(":"), 10);
  const endHour = parseInt(end.split(":"), 10);
  const range = [];
  for (let i = startHour; i <= endHour; i++) {
    range.push(`${i}:00`);
  }
  return range;
};

const getOccupiedSlots = (reservations) => {
  const occupied = {};
  reservations.forEach(({ dia, horario }) => {
    const [start, end] = horario.split(" - ").map(parseTime);
    if (!occupied[dia]) occupied[dia] = new Set();
    generateTimeRange(start, end).forEach((time) => occupied[dia].add(time));
  });
  return occupied;
};

export function Calendario(id) {
  const resource = datosJson.find((item) => item.id === id);
  if (!resource) return <p>Recurso no encontrado</p>;

  const [start, end] = resource.horarios
    .split(" ")
    .pop()
    .split(" - ")
    .map(parseTime);
  const timeRange = generateTimeRange(start, end);
  const occupiedSlots = getOccupiedSlots(resource.reservas);

  return (
    <div className="overflow-x-auto p-4">
      <table className="border-collapse border border-gray-300 w-full text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Hora</th>
            {daysOfWeek.map((day) => (
              <th key={day} className="border border-gray-300 p-2">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeRange.map((hour) => (
            <tr key={hour}>
              <td className="border border-gray-300 p-2 font-bold">{hour}</td>
              {daysOfWeek.map((day) => (
                <td
                  key={`${day}-${hour}`}
                  className={`border border-gray-300 p-2 ${
                    occupiedSlots[day]?.has(hour)
                      ? "bg-red-500 text-white"
                      : "bg-green-200"
                  }`}
                >
                  {occupiedSlots[day]?.has(hour) ? "Ocupado" : "Disponible"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
