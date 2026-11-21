import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"



const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetails = () => {
	const { imdbID } = useParams()
	const [movie, setMovie] = useState(null)
	const [loading, setLoading] = useState(true)
	const [imageError, setImageError] = useState(false)

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
        return (
            <div className="main">
                <div className="movie-details__container">
                    <div className="movie-details__back">
                        <Link to="/" className="movie-details__back-link">Back</Link>
                    </div>
                    <div className="movie-details__content">
                        <div className="movie-details__poster--wrapper">
                            <img  />
                            <div className="movie-details__info">
                                <h1 className="movie-details__title">${imdbID.Title}</h1>
                                <p className="movie-details__year">${imdbID.Year}</p>
                                <p className="movie-details__rating">${imdbID.Rating}</p>
                                <p className="movie-details__released">${imdbID.Releases}</p>
                            </div>
                        </div>
                        <div className="movie-details__text--wrapper"></div>
                    </div>
                </div>
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

    const poster = movie.Poster !=="N/A" ? movie.Poster: "";
    const showPlaceholder = !poster || imageError


}


export default MovieDetails