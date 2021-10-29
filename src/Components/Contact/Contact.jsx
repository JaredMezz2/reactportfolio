import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./Contact.css"

import { Button } from "../index"

class Contact extends Component {
    render(){
        return(
            <section className="section contact" id="contact">
                <div className="contact-container container grid">
                    <div className="contact-data">
                        <h2 className="section-title">Contact</h2>
                        <Fade>
                            <p className="contact-description">
                                Please feel free to reach out, I'd love to get to know your project!
                            </p>
                            <form action="" className="contact-form">
                                <input type="text" className="contact-input" name="name" id="name" placeholder="Name"/>
                                <input type="email" className="contact-input" name="email" id="email" placeholder="Email"/>
                                <textarea name="message" id="message" cols="30" rows="10" className="contact-input" placeholder="Let me know what you're working on!"></textarea>
                                <Button buttonTitle="Send Message" buttonLink="#"/>
                            </form>
                        </Fade>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;
