import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./Resume.css"
import '../../Pages/home.css'; // for higher universal styling elements

import ResumeSection from "./ResumeSection/ResumeSection";
import { Button } from "../index"

let positions = [
    {
        title: 'Jr Software Developer',
        company: 'JICDesign',
        dates: '01/2022 - Current'
    },
    {
        title: 'Software Developer',
        company: 'The Land Between',
        dates: '06/2021 - 09/2022'
    },
    {
        title: 'Customer Service Representative',
        company: 'Concentrix',
        dates: '07/2020 - 03/2021'
    }
]
let education = [
    {
        title: 'Computer Science',
        company: 'Trent University',
        dates: '09/2017 - 12/2021'
    }
]

class Resume extends Component {
    render() {
        return(
            <section className="section resume" id="resume">
                <h2 className="section-title">Resume</h2>
                <div className="resume-container container grid">
                    <Fade left>
                        <ResumeSection sectionHeader="Work Experience" sectionInfo={positions}/>
                    </Fade>
                    <Fade right>
                        <ResumeSection sectionHeader="Education" sectionInfo={education}/>
                    </Fade>
                </div>
                <Fade>
                    <Button buttonTitle="Download Resume" buttonTarget="_blank" buttonLink="/updatedResume.pdf" />
                </Fade>

            </section>
        )
    }
}

export default Resume;
