import React, {Component} from "react";

import Social from "../component/Social";

class Contact extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtitle">Contact Me</h1>
                <p className="p-contact">Email: aritsara.me2545@gmail.com</p>
                <p className="p-contact">instagram: @pt.nutt</p>
                <Social />
            </div>
        );
    }
}

export default Contact;