import React, {Component} from "react";
import profilepic from '../img/aboutme.jpg';

class About extends Component {
    render() {
        return (
        <div className="condiv about">
            <h1 className="subtopic">About Me</h1>
            <img src={profilepic} alt="profile" className="profilepic" />
            <h3>Hi, I am Arissara</h3>
            <p>Computer Engineering Student, Computer Engineering Student, The Facullty of Engineering, Prince of Songkla University
                <br/>I want to learn new technologies and acquire new knowledge to unlock and develop my own potential. I believe that continuous learning and staying updated with the latest advancements will help me enhance my skills and abilities.
            </p>
        </div>
        );
    }
}

export default About;