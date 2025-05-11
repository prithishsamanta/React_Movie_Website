import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {
            id: 1,
            title: "Inception",
            releaseDate: 2010,
            imageUrl: "https://example.com/inception.jpg"
        },
        {
            id: 2,
            title: "The Dark Knight",
            releaseDate: 2008,
            imageUrl: "https://example.com/dark-knight.jpg"
        },
        {
            id: 3,
            title: "Interstellar",
            releaseDate: 2014,
            imageUrl: "https://example.com/interstellar.jpg"
        }
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching for: ${searchQuery}`);
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for a movie..." 
                    className="search-input" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-list">
                {movies.map(movie => 
                    movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard key={movie.id} movie={movie} />)} 
            </div>
        </div>
    );
}

export default Home; 