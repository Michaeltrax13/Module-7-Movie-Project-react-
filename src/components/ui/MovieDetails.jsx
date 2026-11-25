import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"



const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetails = () => {
	const { imdbID } = useParams()
	const [movie, setMovie] = useState(null)
	const [loading, setLoading] = useState(true)

	async function getMovieDetails() {
		try {
            setLoading(true);
            const movieData = await axios.get(
                `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`,
            );
            setMovie(movieData.data);
        } catch (error) {
            console.error("Error fetching movie details:", error)
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 500)
        }
    }

    useEffect(() => {
        getMovieDetails()
    }, [imdbID])

    if (loading) {
        return(
            <div className="movie-card movie-card__skeleton">
                <div className="movie-card__img--skeleton"></div>
                <div className="movie-card__title--skeleton"></div>
                <div className="movie-card__year--skeleton"></div>
            </div>
        )
    }

    if (!movie || movie.Response === "False" ) {
        return (
            <div className="main">
                <div className="movie-details__container">
                    <p>Movie not found</p>
                    <Link to="/" className="movie-details__back--link" >
                        Back to Home
                    </Link>
                </div>
            </div>
        )
    }

    return (
            <div className="main">
                <div className="movie-details__container">
                    <div className="movie-details__back">
                        <Link to="/" className="movie-details__back-link">Back</Link>
                    </div>
                    <div className="movie-details__content">
                        <div className="movie-details__poster--wrapper">
                            <img src={movie.Poster} />
                            <div className="movie-details__info">
                                <h1 className="movie-details__title">{movie.Title}</h1>
                                <p className="movie-details__year">{movie.Year}</p>
                                <p className="movie-details__rating">{movie.Rated}</p>
                                <p className="movie-details__released">{movie.Released}</p>
                            </div>
                        </div>
                        <div className="movie-details__text--wrapper">
                            <div className="movie-details__detail">
                                <h3>Genre</h3>
                                <p>{movie.Genre}</p>
                            </div>
                            <div className="movie-details__detail">
                                <h3>Writer</h3>
                                <p>{movie.Writer}</p>
                            </div>
                            <div className="movie-details__detail">
                                <h3>Actors</h3>
                                <p>{movie.Actors}</p>
                            </div>
                            <div className="movie-details__detail">
                                <h3>Plot</h3>
                                <p>{movie.Plot}</p>
                            </div>
                            <div className="movie-details__detail">
                                <h3>Language</h3>
                                <p>{movie.Language}</p>
                            </div>
                            <div className="movie-details__detail">
                                <h3>Awards</h3>
                                <p>{movie.Awards}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )


}


export default MovieDetails