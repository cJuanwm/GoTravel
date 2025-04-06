import { useState } from "react";
import { datosJson } from "../Calendario/datosJson";
import { FormularioReserva } from "../Formulario/Formulario";
import "./Reservas.css";

export function Reservas() {
  const [propiedadSeleccionada, setPropiedadSeleccionada] = useState(null);

  return (
    <div className="container">
      <h2>Reservas Disponibles</h2>
      <div className="grid-container">
        {datosJson.map((prop) => (
          <div key={prop.id} className="card">
            <img
              src={prop.foto[0]} // Muestra la primera foto
              alt={prop.nombre}
              className="image"
            />
            <div className="card-content">
              <h3 className="card-title">{prop.nombre}</h3>
              <p className="card-text">{prop.descripcion}</p>
              <p className="card-horario">{prop.horarios}</p>
              <button
                className="reserve-button"
                onClick={() => setPropiedadSeleccionada(prop)}
              >
                Reservar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Renderizar formulario solo si hay una propiedad seleccionada */}
      {propiedadSeleccionada && (
        <ReservaForm
          propiedad={propiedadSeleccionada}
          cerrarFormulario={() => setPropiedadSeleccionada(null)}
        />
      )}
    </div>
  );
}
