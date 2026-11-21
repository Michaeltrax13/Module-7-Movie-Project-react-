import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const MovieDetails = () => {
	const { imdbID } = useParams()
	const {movie, setMovie} = useState(null)
	const {loading, setLoading} = useState(true)
	const {imageError, setImageError} = useState(false)

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


}


export default MovieDetails