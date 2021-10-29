import React, { Component } from "react";
import { FaMixer, FaBars } from 'react-icons/fa'
import './NavBar.css'; // for component specific styling elements
import '../../Pages/home.css'; // for higher universal styling elements

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {navHidden: true}
        this.navMenu = React.createRef();
        this.navHeader = React.createRef();

        // bind function to make 'this' work in callback
        this.toggleMenu = this.toggleMenu.bind(this);
        // this.scrollHeader = this.scrollHeader.bind(this);
    }

    // When navbar attaches to page this will activate, allowing us to change background colour on scroll
    componentDidMount() {
        window.addEventListener('scroll', this.scrollHeader);
        window.addEventListener('scroll', this.scrollActive);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHeader);
        window.removeEventListener('scroll', this.scrollActive);
    }

    // Mobile Menu Methods
    showMenu() {
        // console.log(this.navMenu.current);
        this.navMenu.current.classList.add('show-menu')
    }
    closeMenu() {
        // console.log(this.navMenu.current);
        this.navMenu.current.classList.remove('show-menu')
    }

    // method to toggle between showing & not showing the mobile menu
    toggleMenu() {
        // swap state variable
        this.setState(prevState => ({
            navHidden: !prevState.navHidden
        }))

        if (this.state.navHidden) {
            this.showMenu()
        } else {
            this.closeMenu()
        }
    }

    scrollHeader() {
        if (this.scrollY >= 50) {
            document.getElementById('nav-header').classList.add('scroll-header')
        } else {
            document.getElementById('nav-header').classList.remove('scroll-header')
        }
    }


    // Method to calculate current y offset of page to determine what component is current in view, and updates
    // navbar accordingly
    scrollActive(){
        let sections = document.querySelectorAll('section[id]')
        let scrollY = window.pageYOffset

        sections.forEach(current =>{
            let sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id');

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
            }else{
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }

    render() {
        return (
            <div className="nav-header" id="nav-header" ref={this.navHeader} onScroll={this.scrollHeader}>
                <nav className="nav container">
                <a href="#" className="nav-logo">
                    Jared M
                </a>
                <div className="nav-menu" id="nav-menu" ref={this.navMenu}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#header" className="nav-link active-link"  onClick={this.toggleMenu}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link" onClick={this.toggleMenu}>About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link" onClick={this.toggleMenu}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#resume" className="nav-link" onClick={this.toggleMenu}>Resume</a>
                        </li>

                        <a href="#contact" className="button-navMenu" onClick={this.toggleMenu}>Contact</a>
                    </ul>
                    <div className="nav-close" id="nav-close" onClick={this.toggleMenu}>
                        <FaMixer />
                    </div>
                </div>
                <div className="nav-toggle" id="nav-toggle" onClick={this.toggleMenu}>
                    <FaBars />
                </div>
            </nav>
            </div>
        )
    }
}

export default NavBar
