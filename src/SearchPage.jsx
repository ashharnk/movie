
import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { searchMovies } from "./api";
import "./SearchPage.css";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;
      try {
        const data = await searchMovies(query, type, page);
        if (data.Response === "True") {
          setMovies(data.Search);
          setError(null);
        } else {
          setMovies([]);
          setError(data.Error);
        }
      } catch (err) {
        setError("Something went wrong. Please try again later.");
      }
    };

    fetchMovies();
  }, [query, type, page]);

  const addToFavorites = (movie) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.find((fav) => fav.imdbID === movie.imdbID)) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Added to favorites!");
    } else {
      alert("Already in favorites.");
    }
  };

  return (
    <div className="search-page">
      <div className="search-controls">
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="search-select"
        >
          <option value="">All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.Title}</h3>
            <p className="movie-year">{movie.Year}</p>
            <button
              onClick={() => addToFavorites(movie)}
              className="favorites-button"
            >
              Add to Favorites
            </button>
            <Link to={`/movie/${movie.imdbID}`} className="details-link">
              Details
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
