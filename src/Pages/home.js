import React, { Component } from 'react';
import './home.css';

import { NavBar, Header, About, Resume, Projects, Contact, Footer, Snowfall, Sidebar } from "../Components";

class Home extends Component {
    render() {
        return(
            <>
                <Snowfall />
                <NavBar/>
                {/*<Sidebar />*/}
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
