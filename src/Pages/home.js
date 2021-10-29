import React, { Component } from 'react';
import './home.css';
import api from '../api';

import { NavBar, Header, About, Resume, Projects, Contact, Footer } from "../Components";

class Home extends Component {
    render() {
        return(
            <>
                <NavBar/>
                <Header />
                <About />
                <Projects />
                <Resume />
                <Contact />
                <Footer />
            </>
        )
    }
}

export default Home;
