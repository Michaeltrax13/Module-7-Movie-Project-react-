import React from 'react'
import logo from "../assets/absolutecinema.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom" 
import axios from 'axios'

{/*const API_KEY = import.meta.enc.VITE_OMDB_API_KEY;*/}

const Nav = () => {

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove("menu--open")
}


{/*function toggleSearch () {
    // Select necessary DOM elements
    const searchForm = document.querySelector('.search-form');
    const searchButton = document.querySelector('.search__button');
    const searchInput = document.querySelector('#search__input');

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

setTimeout(() => {toggleSearch()},2000);*/}

async function handleSubmit() {

}

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
                <button className="btn__menu" onclick={openMenu}>
                    <FontAwesomeIcon icon="bars" />
                </button>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onclick={closeMenu}>
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
                <h1>Browser Our Movies</h1>
                <form action = {handleSubmit} className="search__form">
                        <input id="search__input" type="text" class="search__input" maxlength="80" placeholder="" />
                        {/*<div class="search__button">
                            <i class="fa-solid fa-magnifying-glass search-icon"></i>
                            <i class="fa-solid fa-xmark search-close"></i>
                        </div>*/}
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Nav