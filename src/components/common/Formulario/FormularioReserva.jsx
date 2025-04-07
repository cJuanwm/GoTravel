// FormularioReserva.jsx (versión simplificada)
import { useState } from "react";
import "./FormularioReserva.css";

export function FormularioReserva({ onSubmit, onCancel }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, email }); // Envía solo los datos del usuario
  };

  return (
    <form className="form-reserva" onSubmit={handleSubmit}>
      <h3>Complete sus datos</h3>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-buttons">
        <button type="submit">Confirmar</button>
        <button type="button" onClick={onCancel}>
          Volver
        </button>
      </div>
    </form>
  );
}
