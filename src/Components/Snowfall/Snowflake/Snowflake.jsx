import React, { Component } from "react";
import "./Snowflake.css"

class Snowflake extends Component {
    constructor(props) {
        super(props);
        this.interval = null;
        this.state = { x: this.startingLocation(), y: 0 }
    }

    componentDidMount() {
        // Apply random x offset
        let start = this.startingLocation();
        document.getElementById('snowflake-' + this.props.snowflakeID).style.left = start + 'px';
        // Apply random size
        document.getElementById('snowflake-' + this.props.snowflakeID).style.fontSize = this.generateSize() + 'em';
        // Setup random animation duration
        document.getElementById('snowflake-' + this.props.snowflakeID).style.animation = 'fall ' + this.generateFallDuration() + 's infinite, sideSway 5s infinite, fadeIn 1.5s 1';
        // Apply random opacity
        // document.getElementById('snowflake-' + this.props.snowflakeID).style.opacity = parseFloat(this.generateOpactiy());
        console.log('starting @ : ', start)
    }

    // Helper methods to generate random number between min/max w/decimals
    generateNumber(min, max, decimals) {
        return ((Math.random() * (max - min)) + min).toFixed(decimals);
    }

    // All values being randomized on startup, can alter these to liking
    generateOpactiy() {
        return this.generateNumber(0.25, 1, 2);
    }
    generateFallDuration() {
        return this.generateNumber(20, 55, 0);
    }
    generateSize() {
        console.log(this.generateNumber(0, 1.5, 1))
        return this.generateNumber(0.33, 1.5, 1);
    }
    startingLocation() {
        return this.generateNumber(0, document.documentElement.offsetWidth, 0);
    }

    render() {
        return (
            <div className={'snowflake'} id={'snowflake-' + this.props.snowflakeID}>❆</div>
        )
    }
}

export default Snowflake;
