import React, { Component, useState } from "react";
import Fade from "react-reveal/Fade";
import "./Contact.css"

import { submitContact, testCall } from "../../api";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', message: '', submitted: false};
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    handleMessageChange = (event) => {
        this.setState({message: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        this.setState({ submitted: true })
        let payload = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value
        }
        // submitContact(payload)
        //     .then(r => console.log(r))
        //     .catch(err => console.log(err));

        testCall()
            .then(r => console.log(r))
            .catch(err => console.log(err))
    }

    render(){
        if (!this.state.submitted) {
            return(
                <section className="section contact" id="contact">
                    <div className="contact-container container grid">
                        <div className="contact-data">
                            <h2 className="section-title">Contact</h2>
                            <Fade>
                                <p className="contact-description">
                                    Please feel free to reach out, I'd love to get to know your project!
                                </p>
                                <form onSubmit={this.handleSubmit} className="contact-form">
                                    <input type="text" className="contact-input" name="name" id="name" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} required/>
                                    <input type="email" className="contact-input" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} required/>
                                    <textarea name="message" id="message" cols="30" rows="10" className="contact-input" placeholder="Let me know what you're working on!" required onChange={this.handleMessageChange} value={this.state.message}></textarea>
                                    <input type="submit" value='Send Message' className='button' />
                                </form>
                            </Fade>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className="section contact" id="contact">
                    <div className="contact-container container grid">
                        <div className="contact-data">
                            <h2 className="section-title">Contact</h2>
                            <Fade>
                                <p className="contact-description">
                                    Please feel free to reach out, I'd love to get to know your project!
                                </p>
                                <div className='contact-form'>
                                    <h3 className='contact-thanks'>Thanks for filling this out, I'll be in touch shortly!</h3>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </section>
            )
        }
    }
}

export default Contact;
