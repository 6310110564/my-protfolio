import React, { Component} from "react";
import { Link } from 'react-router-dom'

class Navitem extends Component {
    render() {
        return (
            //item is Home, About, Education, Skill, Contact เป็น class component
            <li id={this.props.item}>
                <Link to={this.props.tolink}onClick={this.props.activenav.bind(this, this.props.item)}>{this.props.item}</Link>
            </li>
        )
    }
}

export default Navitem