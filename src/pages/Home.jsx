import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import MovieCard from "../components/ui/MovieCard"

const Home = () => {
  const { searchData, loading} = useOutletContext();
  const {sortOption, setSortOption} = useState("default")

  function sortMovies (movies, option) {
    const sorted = [...movies]

    if (option === "A - Z") {
        sorted.sort((a, b) => a.Title.localeCompare(b.Title))
        } else if (option === "Z - A") {
        sorted.sort((a, b) => b.Title.localeCompare(a.Title))
        } else if (option === "oldest") {
        sorted.sort((a, b) => parseInt(a.Year) - parseInt(b.Year))} 
        else if (option === "newest") {
        sorted.sort((a, b) => parseInt(b.Year) - parseInt(a.Year))
        }
        return sorted
    }

    const sortedMovies = sortMovies(searchData.results, sortOption)

    return (
        <div className="content__wrapper--search justify-between">
                    <div className="display__search--box">
                        <h1 data-46guyuhv78 className="search-info">
                            <div className="display__box">
                                Search Results:<span id="display__txt">
                                    {searchData.results.length > 0
                                    ? `Showing: ${searchData.query}`
                                        : searchData.query
                                        ? 'No Movies Found'
                                        : 'Search for a Movie'
                                    }
                                </span>
                            </div>
                        </h1>
                    </div>
                    <div className="movie__filter">
                        <label htmlFor="sortSelect">Sort:</label>
                        <select id="filter" className="filter" value={sortOption} onchange={(e) => setSortOption(e.target.value)}>
                            <option value="default">Default</option>
                            <option value="A - Z">A - Z</option>
                            <option value="Z - A">Z - A</option>
                            <option value="oldest">Oldest</option>
                            <option value="newest">Newest</option>
                        </select>
                    </div>
                    <div className="movies-grid" id="moviesGrid">
                        {loading ? (
                            Array(10).fill(0).map((_, index) => (
                                <MovieCard key={index} skeleton={true} />
                            ))
                        ) : (
                            sortedMovies.map((movie) => (
                                <MovieCard key={movie.imdbID} movie={movie} />
                            ))  
                        )}
                    </div>
                </div>

                
    )
} 
export default Home