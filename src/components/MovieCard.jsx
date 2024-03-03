const MovieCard = ({ movie }) => {

    return (
        <div className="movie-card mx-2 rounded">    
            <img src={ "https://image.tmdb.org/t/p/w500" + movie.poster_path}  alt="movie" className="w-48 rounded" />
        </div>
    );
}

export default MovieCard;