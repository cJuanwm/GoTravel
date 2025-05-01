// src/components/SearchBar.jsx
import React from "react";

export function SearchBar({ query, setQuery, onSearch }) {
  return (
    <form
      onSubmit={onSearch}
      style={{ marginBottom: "1rem", textAlign: "center" }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar imágenes (ej: piscinas)"
        style={{
          padding: "0.5rem",
          width: "60%",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0.5rem 1rem",
          marginLeft: "1rem",
          borderRadius: "8px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Buscar
      </button>
    </form>
  );
}
