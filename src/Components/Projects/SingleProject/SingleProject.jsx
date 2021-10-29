import React, { Component} from "react";
import "./SingleProject.css"

import { Button } from "../../index"

class SingleProject extends Component {

    render(){
        return(
            <div className="projects-container container grid">
                    <div className="data">
                        <h2 className="title">{this.props.projectTitle.toString()}</h2>
                        <p className="sProject-description">
                            {this.props.projectDesc.toString()}
                        </p>
                        <h3>Tech Used</h3>
                        <ul className="tech-list">
                            {this.props.projectTech.split(",").map(function(currentTech, i) {
                                return <li key={ currentTech }> { currentTech } </li>
                            })}
                        </ul>
                        { this.props.projectLinks ?
                            <div className='sProject-buttons'>
                                {this.props.projectLinks.github ? <Button buttonTitle="View Code" buttonLink={this.props.projectLinks.github.toString()}/> : null }
                                {this.props.projectLinks.liveSite ? <Button buttonTitle="Visit Site" buttonLink={this.props.projectLinks.liveSite.toString()}/> : null }
                            </div>
                            : null }
                    </div>
                </div>
        )
    }
}

export default SingleProject;
