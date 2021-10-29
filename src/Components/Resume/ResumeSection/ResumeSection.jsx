import React, { Component } from "react";
import "./ResumeSection.css"

class ResumeSection extends Component {
    render(){
        return(
            <div className="sResume-data">
                <h2 className="section-title title">{this.props.sectionHeader}</h2>
                <div className="sResume-description">
                    {this.props.sectionInfo.map(function(currentSection, i){
                        return <ul className="section-listing" key={i}>
                            <li >{currentSection.title}</li>
                            <li >{currentSection.company}</li>
                            <li >{currentSection.dates}</li>
                        </ul>
                    })}
                </div>
            </div>
        )
    }
}

export default ResumeSection;
