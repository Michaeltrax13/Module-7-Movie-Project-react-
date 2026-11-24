import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const MovieCard = ({movie, skeleton}) => {
  const [imageError, setImageError] = useState(false);

  if (skeleton) {
    return (
        <div className="movie-card movie-card__skeleton">
            <div className="movie-card__img--skeleton"></div>
            <div className="movie-card__title--skeleton"></div>
            <div className="movie-card__year--skeleton"></div>
        </div>
    )
  }

  const poster = movie.Poster !=="N/A" ? movie.Poster: "";
  const showPlaceholder = !poster || imageError
  
    return (
        <div className="movie-card">
            <Link to={`/${movie.imdbID}`} >
                {!showPlaceholder ? (
                    <img 
                    src={movie.Poster} 
                    alt={movie.Title}
                    className="movie-card__img"
                    onError={() => setImageError(true)}
                    />
                ): (
                    <div className="movie-card__poster-placeholder">
                        Movie Poster
                        <br/>
                        Not Available
                    </div>
                )}
            </Link>
            <p className="movie-card__title">{movie.Title}</p>
            <p className="movie-card__title">{movie.Year}</p>
        </div>
    )
}

export default MovieCard


