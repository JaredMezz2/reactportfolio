import React, { Component} from "react";
import  Fade  from "react-reveal/Fade";
import "./Projects.css"

import SingleProject from "./SingleProject/SingleProject";

// structure I want to use for passing in projects, this will need to be updated every one in a while so will use seperate
// json file to read this info, but leaving here for now
let projects = [
    {
        title: 'Blue Lakes',
        purpose: 'Provide The Land Between with a central hub to record crucial lake health data',
        techUsed: ['Node.JS', 'Express', 'MongoDB', 'SCSS'],
        links: {
            github: 'https://github.com/TheLandBetween/BlueLakesProject'
        }
    },
    {
        title: 'Mezz Shots',
        purpose: 'Provide a landing page for personal photography business',
        techUsed: ['Node.JS', 'Express', 'MongoDB', 'SCSS'],
        links: {
            github: 'https://github.com/JaredMezz2/photography',
            liveSite: 'https://mezzshots.me'
        }
    },
    {
        title: 'Type Speed',
        purpose: "Test a user's typing speed and provide accurate results",
        techUsed: ['HTML', 'CSS', 'JS'],
        links: {
            github: 'https://github.com/JaredMezz2/TypeSpeed',
            liveSite: 'https://type.jaredmezz.com'
        }
    }
]


class Projects extends Component {
    render(){
        return(
            <section className="section projects" id="projects">
                <h2 className="section-title">Recent Projects</h2>
                {projects.map(function(currentProject, i) {
                    return <Fade bottom key={i}><SingleProject projectTitle={currentProject.title.toString()} projectDesc={currentProject.purpose.toString()} projectTech={currentProject.techUsed.toString()} projectLinks={currentProject.links}/></Fade>
                }) }

            </section>

        )
    }
}

export default Projects;
