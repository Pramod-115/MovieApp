
const MovieList = (props) => {
    
    const movieArr = props.movies;
    console.log(movieArr);
    if (!movieArr) {
        return (
            <div className="no_result">
                Sorry, No movies found!
            </div>
        )
    }
    const movies = movieArr.map((movie) => {
        console.log(movie.Title);
        return (
            <div className="movie_card col-6 col-md-4 col-lg-3" key={movie.imdbID}>
                <div className="img-con">
                    <img src={`${movie.Poster}`} alt={`${movie.Title}`}/>
                    <div className="movie_overlay">
                        <div className="details_con">
                            <div className="type">{movie.Type}</div>
                            <div>
                                {movie.Year}
                            </div>
                        </div>
                        <h3 className="title">
                            {movie.Title}
                        </h3>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            {movies}
        </>
    )
}

export default MovieList;