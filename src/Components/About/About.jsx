import React, { Component } from "react";
import {FaUser, FaSchool} from 'react-icons/fa'
import Fade from 'react-reveal/Fade';

import "./About.css"
import '../../Pages/home.css'; // for higher universal styling elements

class About extends Component {
    getAge(birthDate) {
        return Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
    }
    render(){
        return(
            <section className="about section" id="about">
                <h2 className="section-title">About</h2>

                <div className="about-container container grid">
                    <Fade left>
                        <div className="about-data">
                            <FaUser className="about-img"/>
                            <h3 className="title">Jared <br/>Mezzatesta</h3>
                            <p className="description">{ this.getAge('1999-02-08') } Years Old</p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="about-data">
                            <FaSchool className="about-img"/>
                            <h3 className="title">BScH Computer<br/>Science</h3>
                            <p className="description">Software Engineering Specialization</p>
                        </div>
                    </Fade>

                </div>
            </section>
        )
    }
}

export default About;
