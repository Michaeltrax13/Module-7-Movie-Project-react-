import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom" 
import logo from "../assets/absolutecinema.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__row">
            <div className="footer__columns">
                <div className="footer__column">
                    <Link to="/" className="nav__link nav__link--white nav__link--margins">Home</Link>
                </div>
                <div className="footer__column--divider">|</div>
                <div className="footer__column">
                    <Link to="/" className="nav__link nav__link--white nav__link--margins">Find Your Movie</Link>
                </div>
                <div className="footer__column--divider">|</div>
                <div className="footer__column">
                    <Link to="/" className="nav__link nav__link--white nav__link--margin">Contact</Link>
                </div>
            </div>
            <div className="footer__divider"></div>
        </div>
        <div className="footer__bottom">
            <figure className="footer__logo">
                <img src={ logo } alt="" className="logo" />
            </figure>
            <div className="footer__copyright">
                @ 2026 Absolute Cinema Inc. All Rights Reserved
            </div>
            <div className="footer__socials">
                <a className="footer__social--link">
                    <FontAwesomeIcon icon="facebook" className='fa-facebook' />
                </a>
                <a className="footer__social--link">
                    <FontAwesomeIcon icon="twitter" className='fa-twitter' />
                </a>
                <a className="footer__social--link">
                    <FontAwesomeIcon icon="youtube" className='fa-youtube'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer