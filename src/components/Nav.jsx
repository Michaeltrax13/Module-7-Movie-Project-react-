import React, { useEffect, useState } from 'react'
import logo from "../assets/absolutecinema.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation, useNavigate } from "react-router-dom" 
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY;
console.log("API key loaded:", Boolean(API_KEY))

const Nav = ({ setSearchData, setLoading }) => {

    function openMenu() {
        document.body.classList += " menu--open"
    }

    function closeMenu() {
        document.body.classList.remove("menu--open")
    }

    const navigate = useNavigate();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState("")


    {/*function toggleSearch () {
        // Select necessary DOM elements
        const searchForm = document.querySelector('.search-form');
        const searchButton = document.querySelector('.search__button');
        const searchInput = document.querySelector('#search__input');
        const searchDisplay = document.getElementById('display__txt')

        // Add event listener for search button
        searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();

    if (searchTerm) {
        searchDisplay.textContent = ` ${searchTerm}`;
        fetchMovies(searchTerm);
    }

    searchForm.classList.toggle('active-search');
    });

        // Handle Enter key for searching
        searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();

            const searchTerm = searchInput.value.trim();

            if (searchTerm) {
            searchDisplay.textContent = ` ${searchTerm}`;
            fetchMovies(searchTerm);
            }

            searchInput.value = '';
            searchForm.classList.remove('active-search');
            searchInput.blur();   
        }
        });
    };

    setTimeout(() => {toggleSearch()},2000); */}

    async function handleSubmit(formData) {
        const query = formData.get("searchInput")
        setSearchTerm(query)
        fetchMovies(query)
        if(location.pathname !== "/") {
            navigate("/")
        }
    }

    async function fetchMovies(query) {
        setLoading(true);
        const { data } = await axios.get(
            `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
        )

        setSearchData({
            results: data.Search || [],
            query: query,
        })

        setTimeout(() => {
            setLoading(false)
        }, 500)
    }

    useEffect(() => {
        fetchMovies("Resident");
    }, [])

  return (
    <div className="contaner">
        <div className="row">
            <div className="nav">
                <Link to="/" >
                    <img src={logo} alt="" className="logo" />
                </Link>
                <div className="nav__links">
                    <Link to="/" className="nav__link nav__link--white">Home</Link>
                    <Link to="/" className="nav__link nav__link--white">Find your movie</Link>
                    <Link to="/" className="nav__link nav__link--btn">Contact</Link>
                </div>
                <button className="btn__menu" onClick={openMenu}>
                    <FontAwesomeIcon icon="bars" />
                </button>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list"><Link to="/" className="menu__link menu__link--white">Home</Link></li>
                        <li className="menu__list"><Link to="/" className="menu__link menu__link--white">Find your movie</Link></li>
                        <li className="menu__list"><Link to="/" className="menu__link menu__link--white">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="content__wrapper">
                <div className="search__form--container">
                    <h1>Browser Our Movies</h1>
                    <form action = {handleSubmit} className="search__form">
                            <input name="searchInput" type="text" className="search__input" maxLength="80" placeholder="" />
                            {/*<div class="search__button">
                                <i class="fa-solid fa-magnifying-glass search-icon"></i>
                                <i class="fa-solid fa-xmark search-close"></i>
                            </div>*/}
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav