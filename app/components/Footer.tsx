import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import "../css-files/footer.css"

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className='social-links'>
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/khazra-ayub-99b762260/"><FaLinkedin /></a>
                    <a href="https://github.com/Khazraayub"><FaGithub /></a>
                </div>
                <p className='footer-text'>Created by <span className='name'>Khazra Shaikh.</span> | All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Footer