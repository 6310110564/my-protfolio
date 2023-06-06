import React, { Component, useRef} from "react";
import Navitem from './Navitems'

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-nav-toggle');

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle('active');
})

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
            <span className="nav-toggle" id="js-nav-toggle">
                <i class="fas fa-bars"></i>
            </span>

            <div className="nav-r">
                <h3>PORTFOLIO</h3>
            </div>

            <ul className="nav-l" id="js-menu">
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