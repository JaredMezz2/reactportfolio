import React, { Component } from "react";
import "./Snowfall.css";
import Snowflake from "./Snowflake/Snowflake";

class Snowfall extends Component {
    constructor(props) {
        super(props);
        this.state = {snowflakes: [], active: true, generatorInterval: null};
    }

    componentDidMount() {
        // Set height of div to page height (all content)
        document.getElementById('snowfall').style.height = document.documentElement.offsetHeight + 'px';
        // Setup state to begin snowflake interval generation
        this.setState({snowflakes: [], active: true, generatorInterval: setInterval(() => { this.generateSnowflake() }, 1000)});
    }

    // On each update (interval generating new snowflake), check to see if we've hit snowflake cap.
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.snowflakes.length >= 40) {
            clearInterval(this.state.generatorInterval)
        }
    }

    // Create & display new snowflake component to screen after 0 - 0.5s
    generateSnowflake() {
        let randomTimeLength = Math.floor(Math.random() * (500 - 0 + 1) + 0);
        setTimeout(
            () => this.setState({ snowflakes: [...this.state.snowflakes, <Snowflake snowflakeID={this.state.snowflakes.length} key={this.state.snowflakes.length}/>]}),
            randomTimeLength
        )
    }

    // To be used later, clear all snowflakes from screen if user wants to disable
    deleteSnowflakes() {
        this.setState({snowflakes: []})
    }


    render() {
        return (
            <div id='snowfall'>
                { this.state.snowflakes }
            </div>
        )
    }
}


export default Snowfall;
