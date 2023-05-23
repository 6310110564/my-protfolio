import React, {Component} from "react";
import Widecard from "../component/Widecard";

class Education extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Bachelor's Degree" where="Department of Computer Engineering Prince of Songkla University" from="2020" to="Present"/>
                <Widecard title="High School" where="Stree Yala School" from="2013" to="2019"/>
            </div>
        );
        
    }
}

export default Education;