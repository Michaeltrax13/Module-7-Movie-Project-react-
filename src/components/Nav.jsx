import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation, useNavigate } from "react-router-dom" 
import axios from 'axios'
import Navbar from './NavBar'

const API_KEY = process.env.REACT_APP_API_KEY;
console.log("API key loaded:", Boolean(API_KEY))

const Nav = ({ setSearchData, setLoading }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const [ searchTerm, setSearchTerm] = useState("")


    

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const query = formData.get("searchInput")
        
        setSearchTerm(query)
        fetchMovies(query)
        if(location.pathname !== "/") {
            navigate("/")
        }
    }

    async function fetchMovies(query) {
        setLoading(true);
        try {
            const { data } = await axios.get(
                `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
            )
    
            setSearchData({
                results: data.Search || [],
                query: query,
            })
        } catch (error) {
            console.error("Error fetch movies:", error)
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 500)
        }
    }

    useEffect(() => {
        fetchMovies('Resident');
    }, [])

  return (
    <div className="container">
        <div className="row">
            <Navbar />
            <h1>Browse Our Movies</h1>
            <form onSubmit={handleSubmit} className="search__form">
                <div className="search-form__group">
                    <input name="searchInput" type="text" className="search__input" maxLength="80" placeholder="" />
                    <button className="search-form__button" type="submit">
                        <FontAwesomeIcon icon="magnifying-glass" className="search-form__icon" />
                    </button>    
                </div>               
            </form>
        </div>
    </div>
  )
}

export default Nav