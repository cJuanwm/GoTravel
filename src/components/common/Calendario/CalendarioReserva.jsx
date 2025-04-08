import { useState, useEffect } from "react";
import { CalendarioCompleto } from "./CalendarioCompleto";
import { FormularioReserva } from "../Formulario/FormularioReserva";
import "./CalendarioReserva.css";

export function CalendarioReserva({ espacio, onClose, actualizarReservas }) {
  const [slotSeleccionado, setSlotSeleccionado] = useState(null);
  const [espacioConReservas, setEspacioConReservas] = useState(espacio);
  const [reservaConfirmada, setReservaConfirmada] = useState(false);

  // Cargar reservas desde sessionStorage al montar
  useEffect(() => {
    const key = `reservas-espacio-${espacio.id}`;
    const reservasGuardadas = JSON.parse(sessionStorage.getItem(key)) || [];
    setEspacioConReservas({
      ...espacio,
      reservas: [...espacio.reservas, ...reservasGuardadas],
    });
  }, [espacio]);

  const handleReserveSlot = ({ dia, hora }) => {
    setSlotSeleccionado({ dia, hora });
  };

  const handleSubmitReserva = (datosUsuario) => {
    if (!slotSeleccionado) return;

    const nuevaReserva = {
      id: espacioConReservas.reservas.length + 1,
      dia: slotSeleccionado.dia,
      horario: slotSeleccionado.hora,
      usuario: datosUsuario,
    };

    const key = `reservas-espacio-${espacio.id}`;
    const reservasPrevias = JSON.parse(sessionStorage.getItem(key)) || [];
    const nuevasReservas = [...reservasPrevias, nuevaReserva];
    sessionStorage.setItem(key, JSON.stringify(nuevasReservas));

    actualizarReservas(espacio.id, nuevaReserva);
    setReservaConfirmada(true);
  };

  const cerrarAlerta = () => {
    setReservaConfirmada(false);
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
              espacio={espacioConReservas}
              onReserveSlot={handleReserveSlot}
            />
          </>
        )}
      </div>

      {/* Modal de confirmación visual */}
      {reservaConfirmada && (
        <div className="modal-confirmacion">
          <div className="modal-contenido">
            <h3>¡Reserva confirmada! 🎉</h3>
            <p>Has reservado tu espacio exitosamente.</p>
            <button onClick={cerrarAlerta}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}
