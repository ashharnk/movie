import axios from "axios";

const API_URL = "http://www.omdbapi.com/"
const API_KEY = "e658cb8e";

const api = axios.create({
  baseURL: API_URL,
});

export const searchMovies = async (query, type, page) => {
  try {
    const response = await api.get("/", {
      params: {
        apikey: API_KEY,
        s: query,
        type,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await api.get("/", {
      params: {
        apikey: API_KEY,
        i: id,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};