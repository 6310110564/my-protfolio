import React, {Component} from 'react';
import Social from '../component/Social';
import profilepic from '../img/profile.jpg';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
        <div className="condiv home">
            <img src={profilepic} alt="profile" className="profilepic" />
            <ReactTypingEffect text={'I am Arissara'} speed={200} eraseDelay={300} className="typingeffect"/>
            <ReactTypingEffect text={'I am computer engineering student'} speed={200} eraseDelay={300} className="typingeffect"/>
            <Social />
        </div>
        );
    }
}

export default Home;
