import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import "./Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (favorites.length === 0) {
    return <p className="empty-message">No favorites added yet.</p>;
  }

  return (
    <div className="favorites">
      <h2 className="favorites-title">Your Favorites</h2>
      <div className="favorites-grid">
        {favorites.map((movie) => (
          <div key={movie.imdbID} className="favorite-card">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="favorite-poster"
            />
            <h3 className="favorite-title">{movie.Title}</h3>
            <p className="favorite-year">{movie.Year}</p>
            <button
              onClick={() => removeFavorite(movie.imdbID)}
              className="remove-button"
            >
              Remove
            </button>
            <Link to={`/movie/${movie.imdbID}`} className="details-link">
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
