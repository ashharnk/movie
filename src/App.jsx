import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import SearchPage from "./SearchPage";
import MovieDetails from "./MovieDetails";
import Favorites from "./Favorites";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1 className="title">Movie Search App</h1>
          <Link to="/favorites" className="favorites-link">
            Favorites
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
