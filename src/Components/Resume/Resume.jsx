import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./Resume.css"
import '../../Pages/home.css'; // for higher universal styling elements

import ResumeSection from "./ResumeSection/ResumeSection";
import { Button } from "../index"

class Resume extends Component {
    render() {
        return(
            <section className="section resume" id="resume">
                <h2 className="section-title">Resume</h2>
                <div className="resume-container container grid">
                    <Fade left>
                        <ResumeSection sectionHeader="Work Experience" sectionInfo={[{title: 'Software Developer', company: 'The Land Between', dates: '06/2021 - Current'}, {title: 'Customer Service Representative', company: 'Concentrix', dates: '07/2020 - 03/2021'}]}/>

                    </Fade>
                    <Fade right>
                        <ResumeSection sectionHeader="Education" sectionInfo={[{title: 'Computer Science', company: 'Trent University', dates: '09/2017 - 12/2021'}]}/>

                    </Fade>
                </div>
                <Fade>
                    <Button buttonTitle="Download Resume" buttonLink="/updatedResume.pdf"></Button>
                </Fade>

            </section>
        )
    }
}

export default Resume;
