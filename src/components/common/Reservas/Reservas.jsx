import { useState } from "react";
import { datosJson } from "../../../services/datosJson";
import { CalendarioReserva } from "../Calendario/CalendarioReserva";
import "./Reservas.css";

export function Reservas() {
  const [espacioSeleccionado, setEspacioSeleccionado] = useState(null);

  return (
    <div className="reservas-container">
      <div className="calendario-grid">
        {datosJson.map((espacio) => (
          <div className="calendario-card" key={espacio.id}>
            <div className="card-img-container">
              {espacio.foto && (
                <img
                  src={espacio.foto.replace("..", "")}
                  alt={espacio.nombre}
                  className="card-img"
                />
              )}
            </div>
            <div className="card-content">
              <h2>{espacio.nombre}</h2>
              <p>{espacio.descripcion}</p>
              <p>
                <strong>Horarios:</strong> {espacio.horarios}
              </p>
              <button
                className="btn-reservar"
                onClick={() => setEspacioSeleccionado(espacio)}
              >
                Reservar
              </button>
            </div>
          </div>
        ))}
      </div>

      {espacioSeleccionado && (
        <CalendarioReserva
          espacio={espacioSeleccionado}
          onClose={() => setEspacioSeleccionado(null)}
        />
      )}
    </div>
  );
}
