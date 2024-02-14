import React, { Component } from "react";
import './Sidebar.css';
import _ from "core-js/internals/array-iteration"; // for component specific styling elements

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.generateRandomColor = this.generateRandomColor.bind(this);
        this.handleThemeClick = this.handleThemeClick.bind(this);
    }

    generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    handleThemeClick() {
        const randomColor = this.generateRandomColor();
        const complementaryColor = this.getComplementaryColor(randomColor);
        const root = document.documentElement;
        root.style.setProperty('--body-color', randomColor);
        root.style.setProperty('--container-color', complementaryColor);
    }

    getComplementaryColor(color) {
        const hex = color.slice(1).match(/.{2}/g);
        const rgb = _.map(hex, x => parseInt(x, 16));

        const complementary = rgb.map(x => 255 - x);

        return `#${complementary.join('')}`;
    }

    render() {
        return(
            <div id={'sidebar'}>
                <section id={'sidebarContent'}>
                    <a onClick={this.addSnow}>❆</a>
                    <a onClick={this.handleThemeClick}>Color</a>
                </section>
            </div>
        )
    }
}


export default Sidebar;
