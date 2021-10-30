import React, { Component } from "react";
import './Button.css'; // for component specific styling elements

class Button extends Component {
    render() {
        return(
            <a href={this.props.buttonLink} target={this.props.buttonTarget} rel="noreferrer" className="button">{this.props.buttonTitle}</a>
        )
    }
}

export default Button;
