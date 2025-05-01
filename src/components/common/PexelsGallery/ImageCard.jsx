// src/components/ImageCard.jsx
import React from "react";

export function ImageCard({ photo }) {
  return (
    <div
      style={{
        width: "300px",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={photo.src.medium}
        alt={photo.alt}
        style={{ width: "100%", height: "auto" }}
      />
      <div style={{ padding: "0.5rem", fontSize: "14px", textAlign: "center" }}>
        <strong>{photo.photographer}</strong>
      </div>
    </div>
  );
}
