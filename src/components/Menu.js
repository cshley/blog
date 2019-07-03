import React, {Component} from 'react';
import './menu.css';

class Menu extends Component {
    render() {
        return (

            <div className="Menu flex-container">

                    <a className="titleMenuMobile" href="#linkMenu">c h l o e | a s h l e y</a>

                    <div className="navbar">
                    <br />
                    <li>
                        <a className=" mobileMenu mobileMenuOne" href="#link2018">2 0 1 8</a>
                    </li>
                    <li>
                        <a className=" mobileMenu mobileMenuTwo" href="#link2017">2 0 1 7</a>
                    </li>
                    <li>
                        <a className=" mobileMenu mobileMenuThree" href="#link2016">2 0 1 6</a>
                    </li>
                  

                    <a className="mobileMenu mobileMenuAbout" href="#linkMenu">a b o u t</a>

                    <p className="titleMenuLaptop">
                        c h l o e | a s h l e y</p>

                   

                    <div className="dropdown">
                        <a href="#linkhome">
                            <button className="dropbtn">w o r k
                                <i className="fa fa-caret-down"></i>
                            </button>
                        </a>

                        <div className="dropdown-content">
                            <a href="#link2018">2 0 1 8</a>
                            <a href="#link2017">2 0 1 7</a>
                            <a href="#link2016">2 0 1 6</a>
                        </div>

                    </div>
                </div>
            </div>
       
        );
    }
    }
export default Menu; 

