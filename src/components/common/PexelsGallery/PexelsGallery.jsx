// src/components/PexelsGallery.jsx
import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import axios from "axios";
import { ImageCard } from "./ImageCard";

const API_KEY = "euL333jhBZBgbU9Q58hKni9d62a3DbTsHIysEUNTXm3e3f0a9XRyX58R"; // ⚠️ Reemplaza con tu clave real

export function PexelsGallery() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setLoading(true);
      const res = await axios.get("https://api.pexels.com/v1/search", {
        headers: {
          Authorization: API_KEY,
        },
        params: {
          query,
          per_page: 12,
        },
      });

      setPhotos(res.data.photos);
    } catch (error) {
      console.error("Error al buscar imágenes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      {loading && <p style={{ textAlign: "center" }}>Cargando imágenes...</p>}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {photos.map((photo) => (
          <ImageCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}
