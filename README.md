Movie Search Application
This is a React-based movie search application that integrates with the OMDB API. It allows users to search for movies, view detailed information about them, and manage a list of favorites.

Features
Search Movies: Search for movies, series, or episodes by title or keyword.
View Details: View detailed information about a selected movie, including its poster, title, release year, genre, plot, ratings, and cast.
Favorites Management: Add or remove movies from the favorites list and persist them locally using localStorage.
Pagination: Navigate through search results with previous and next buttons.
Filter by Type: Filter movies based on their type (movie, series, or episode) using the dropdown.
Error Handling: Displays user-friendly messages in case of errors or if no results are found.
Tech Stack
Frontend: ReactJS, HTML, CSS
API Integration: OMDB API
Routing: React Router
Installation
Clone the repository:

git clone https://github.com/your-repo/movie-search-app.git
cd movie-search-app
Install dependencies:

npm install
Replace your_api_key_here in src/api.js with your OMDB API key. You can get one from OMDB API.

Start the development server:

npm start
Open your browser and navigate to http://localhost:3000.

Project Structure
src/
├── App.js                 # Main application file
├── App.css               # Global styles
├── SearchPage.js         # Search page component
├── SearchPage.css        # Styles for search page
├── MovieDetails.js       # Movie details page component
├── MovieDetails.css      # Styles for movie details page
├── Favorites.js          # Favorites page component
├── Favorites.css         # Styles for favorites page
├── api.js                # Axios configuration and API functions
├── index.js              # Application entry point
API Integration
The application uses the OMDB API for movie data.

Search Movies:

export const searchMovies = async (query, type, page) => {
  const response = await api.get("/", {
    params: {
      apikey: API_KEY,
      s: query,
      type,
      page,
    },
  });
  return response.data;
};
Get Movie Details:

export const getMovieDetails = async (id) => {
  const response = await api.get("/", {
    params: {
      apikey: API_KEY,
      i: id,
    },
  });
  return response.data;
};
Usage
Search for movies, series, or episodes using the search bar.
Filter the results by type using the dropdown.
Click on any movie to view detailed information.
Add movies to your favorites and view them on the favorites page.
Screenshots
Search Page: Displays search results in a grid format with pagination.
Movie Details Page: Shows detailed information about a selected movie.
Favorites Page: Displays the list of favorite movies, allowing users to remove movies from the list.
Future Enhancements
Add user authentication to save favorites across devices.
Enhance the UI/UX with advanced animations and transitions.
Add more filters like release year and genre. T License](LICENSE).
