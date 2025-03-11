import { useState, useEffect } from "react";
import "./Reservas.css";

export function Reservas() {
  const [categorias, setCategorias] = useState([]);
  const [propiedades, setPropiedades] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [nombreBusqueda, setNombreBusqueda] = useState("");

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        setCategorias(data.categorias);
        setPropiedades(data.propiedades);
      })
      .catch((error) => console.error("Error cargando datos:", error));
  }, []);

  const propiedadesFiltradas = propiedades.filter((prop) => {
    return (
      (categoriaSeleccionada
        ? prop.categorias_id === categoriaSeleccionada
        : true) &&
      (nombreBusqueda
        ? prop.title.toLowerCase().includes(nombreBusqueda.toLowerCase())
        : true)
    );
  });

  return (
    <div className="container">
      <div className="filter-container">
        <select
          onChange={(e) => setCategoriaSeleccionada(Number(e.target.value))}
          className="select"
        >
          <option value="">Todas las categorías</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nombre}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={nombreBusqueda}
          onChange={(e) => setNombreBusqueda(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="grid-container">
        {propiedadesFiltradas.map((prop) => (
          <div key={prop.id} className="card">
            <img src={prop.images[0]} alt={prop.title} className="image" />
            <div className="card-content">
              <h3 className="card-title">{prop.title}</h3>
              <p className="card-text">{prop.location}</p>
              <p className="card-price">{prop.price}</p>
              <p className="card-rating">⭐ {prop.rating}</p>
              <button className="reserve-button">Reservar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
