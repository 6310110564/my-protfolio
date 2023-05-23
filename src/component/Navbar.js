import React, { Component} from "react";
import Navitem from './Navitems'

class Navbar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            'NavItemActive': ''
        }
    }

    activeitem = (item) => {
        if(this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active')
        }
        this.setState( {'NavItemActive' : item}, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active')
        })
    }

    // ส่ง parameter ผ่าน props
    render() {
        return(
        <nav>
            <ul>
                <Navitem item='Home' tolink="/" activenav={this.activeitem}></Navitem>
                <Navitem item='About' tolink="/about" activenav={this.activeitem}></Navitem>
                <Navitem item='Education' tolink="/education" activenav={this.activeitem}></Navitem>
                <Navitem item='Skills' tolink="/skills" activenav={this.activeitem}></Navitem>
                <Navitem item='Contact' tolink="/contact" activenav={this.activeitem}></Navitem>
            </ul>
        </nav>
        )
    }
}

export default Navbar