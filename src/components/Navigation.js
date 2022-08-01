import React from "react";

class Navigation extends React.Component{
    render(){
        return(
            <div className="navBar">
                <ul className="item">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about-Us">About Us</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact-us">Contact Us</a></li>
                </ul>
            </div>
        )
    }
}
export default Navigation;