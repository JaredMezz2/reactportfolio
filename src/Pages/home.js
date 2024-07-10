import React, { Component } from 'react';
import ReactGA from "react-ga4";
import './home.css';

import { NavBar, Header, About, Resume, Projects, Contact, Footer, Snowfall, Sidebar } from "../Components";

class Home extends Component {
    render() {
        ReactGA.send({
           hitType: 'pageview',
           page: '/',
           title: 'Home'
        });

        return(
            <>
                {/*<Snowfall />*/}
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
