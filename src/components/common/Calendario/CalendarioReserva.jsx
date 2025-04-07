// CalendarioReserva.jsx
import { useState } from "react";
import { CalendarioCompleto } from "./CalendarioCompleto";
import { FormularioReserva } from "../Formulario/FormularioReserva";
import "./CalendarioReserva.css";

export function CalendarioReserva({ espacio, onClose, actualizarReservas }) {
  const [slotSeleccionado, setSlotSeleccionado] = useState(null);

  const handleReserveSlot = ({ dia, hora }) => {
    setSlotSeleccionado({ dia, hora });
  };

  const handleSubmitReserva = (datosUsuario) => {
    if (!slotSeleccionado) return;

    const nuevaReserva = {
      id: espacio.reservas.length + 1,
      dia: slotSeleccionado.dia,
      horario: slotSeleccionado.hora,
      usuario: datosUsuario, // Ahora recibe directamente los datos del usuario
    };

    actualizarReservas(espacio.id, nuevaReserva);
    onClose();
  };

  return (
    <div className="calendario-reserva-overlay">
      <div className="calendario-reserva">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Reservar: {espacio.nombre}</h2>

        {slotSeleccionado ? (
          <FormularioReserva
            onSubmit={handleSubmitReserva}
            onCancel={() => setSlotSeleccionado(null)}
          />
        ) : (
          <>
            <p>{espacio.descripcion}</p>
            <CalendarioCompleto
              espacio={espacio}
              onReserveSlot={handleReserveSlot}
            />
          </>
        )}
      </div>
    </div>
  );
}
