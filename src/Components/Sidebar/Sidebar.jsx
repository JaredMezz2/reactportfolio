import React, { Component } from "react";
import './Sidebar.css'; // for component specific styling elements

class Sidebar extends Component {

    addSnow() {
        console.log('adding snow');
    }

    render() {
        return(
            <div id={'sidebar'}>
                <a onClick={this.addSnow}>❆</a>
            </div>
        )
    }
}

export default Sidebar;
