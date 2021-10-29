import React, { Component } from "react";
import "./Footer.css"

import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa'

class Footer extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.scrollUp);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollUp);
    }

    scrollUp() {
        let scrollUp = document.getElementById('scroll-up');
        if (this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }

    render(){
        return(
            <section className="section footer">
                <div className="footer-container container grid">
                    <a href="#" className="logo">
                        Jared M
                    </a>
                    <p className="description">Software Developer</p>

                    <div className="social">
                        <a href="https://github.com/JaredMezz2" target="_blank" rel="noreferrer" className="social-link"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/jaredmezzatesta" target="_blank" rel="noreferrer" className="social-link"><FaLinkedin /></a>
                    </div>
                </div>

                <a href="#" className="scroll-up" id="scroll-up"><FaArrowUp /></a>
            </section>
        )
    }
}

export default Footer;
