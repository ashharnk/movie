import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieDetails } from "./api";
import "./MovieDetails.css";


function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const data = await getMovieDetails(id);
                setMovie(data);
            } catch (err) {
                setError("Unable to fetch movie details.");
            }
        };
        fetchDetails();
    }, [id]);

    const addToFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (!favorites.find((fav) => fav.imdbID === movie.imdbID)) {
            favorites.push({
                imdbID: movie.imdbID,
                Title: movie.Title,
                Year: movie.Year,
                Poster: movie.Poster,
            });
            localStorage.setItem("favorites", JSON.stringify(favorites));
            alert("Added to favorites!");
        } else {
            alert("Already in favorites.");
        }
    };

    if (error) {
        return <p className="error-message">{error}</p>;
    }

    if (!movie) {
        return <p className="loading-message">Loading...</p>;
    }
    if (error) {
        return <p className="error-message">{error}</p>;
    }

    if (!movie) {
        return <p className="loading-message">Loading...</p>;
    }

    return (

        <div className="movie-details">
            <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
            <div className="movie-info">
                <h2 className="movie-title">{movie.Title}</h2>
                <p><strong>Year:</strong> {movie.Year}</p>
                <p><strong>Genre:</strong> {movie.Genre}</p>
                <p><strong>Plot:</strong> {movie.Plot}</p>
                <p><strong>Director:</strong> {movie.Director}</p>
                <p><strong>Actors:</strong> {movie.Actors}</p>
                <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
                <button onClick={addToFavorites} className="favorites-button">
                    Add to Favorites
                </button>
            </div>
        </div>
    );
}

export default MovieDetails;