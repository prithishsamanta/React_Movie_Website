import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                setLoading(true);
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.error(err);
                setError("Failed to load movies. Please try again later.");
            } finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, []);

    useEffect(() => {
        const loadPopularMovies = async () => {
          try {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
          } catch (err) {
            console.log(err);
            setError("Failed to load movies...");
          } finally {
            setLoading(false);
          }
        };
    
        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return;
        if(loading) return;

        setLoading(true);

        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        }
        catch(err){
            console.error(err);
            setError("Failed to search movies. Please try again later.");
        }
        finally{
            setLoading(false);
        }
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

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}

            { loading? (
                <div>Loading...</div>
            ) : (
                <div className="movie-list">
                    {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)} 
                </div>
            )}
        </div>
    );
}

export default Home; 
