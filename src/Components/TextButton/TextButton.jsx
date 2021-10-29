import React, { Component } from "react";
import "./TextButton.css"

class TextButton extends Component {
    render(){
        return(
            <a href={this.props.buttonLink} className="text-button">{this.props.buttonTitle}{this.props.buttonIcon ? this.props.buttonIcon : null}</a>
        )
    }
}

export default TextButton;
