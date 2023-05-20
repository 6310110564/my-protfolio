import React, { Component} from "react";
import Navitem from './Navitems'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    render() {
        return(
        <nav>
            <ul>
                <Navitem item='Home' tolink="/"></Navitem>
                <Navitem item='Abount' tolink="/about"></Navitem>
                <Navitem item='Education' tolink="/education"></Navitem>
                <Navitem item='Skills' tolink="/skills"></Navitem>
                <Navitem item='Contact' tolink="/contact"></Navitem>
            </ul>
        </nav>
        )
    }
}

export default Navbar