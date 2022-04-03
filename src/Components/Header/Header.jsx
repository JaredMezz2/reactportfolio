import React, { Component } from "react";
import { FaArrowDown } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';

import './Header.css'; // for component specific styling elements
import '../../Pages/home.css'; // for higher universal styling elements

import { Button, TextButton } from "../index"

class Header extends Component {
    render() {
        return(
            // HEADER / HOME DISPARITY, SINCE MAIN PAGE IS CALLED HOME YET IN NAVBAR I WANT TOP TO BE HOME
            <Fade>
                <section className="header container" id="header">
                    <div className="header-content grid">
                        <div className="header-group">
                            <img src="../../programmer-transparent.gif" alt="" className="header-img"/>
                        </div>
                            <div className="header-data">
                                <h3 className="header-subtitle">Software Developer</h3>
                                <h1 className="header-title">Jared Mezzatesta</h1>
                                <p className="header-description">
                                    Hi, my name is Jared Mezzatesta and I graduated with an Honours Bachelors of Science in Computer Science & a specialization in Software Engineering.
                                    I'm currently employed as a Software Developer.
                                </p>

                                <div className="header-buttons">
                                    <Button buttonTitle="Contact" buttonLink="#contact"/>
                                    <TextButton buttonTitle="View Projects" buttonIcon={<FaArrowDown className="buttonIcon"/>} buttonLink="#projects"></TextButton>
                                </div>
                            </div>
                    </div>
                </section>
            </Fade>

        )
    }
}

export default Header;
