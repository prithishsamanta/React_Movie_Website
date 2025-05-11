function MovieCard({movie}){

    function OnFavClick() {
        alert("clicked");
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="movie-button" onClick={OnFavClick}/>
                </div>
            </div>
            <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-release-date">Release Date: {movie.releaseDate}</p>
            </div>
        </div>
    )
}

export default MovieCard;