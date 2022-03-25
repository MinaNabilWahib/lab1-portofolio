import React from "react";
import './HeroSection.css'

class Hero extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        console.log("DID MOUNT");
    }

    componentDidUpdate() {
        console.log("DID UPDATE");
    }

    componentWillUnmount() {
        console.log("Will unmount");
    }
    render() {
        return (
            <div className="hero" id='hero'>
                <h1 className="intro p-3 m-2 my-5">Hi, I'm Hola</h1>
                <p className="main-paragraph p-4 m-3">I build value through design.</p>
                <button className="btn btn-light m-5 w-20">Contact Me</button>
            </div>
        )
    }
}

export default Hero;