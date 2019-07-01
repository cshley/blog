import React, {Component} from 'react';
import './menu.css';


class Menu extends Component {
    render() {
        return (
   
<div className="Menu flex-container">
    
            <div className="navbar">
                
       
                <a href="#linkMenu">a b o u t</a>
    
                
                </div>
                <p className="titleMenu"> c h l o e | a s h l e y</p>
               
                    <div className="dropdown">
                    <a href="#linkhome"> <button className="dropbtn">w o r k
                        <i className="fa fa-caret-down"></i>
                        </button></a>
                    
                        <div className="dropdown-content">
                            <a href="#link2018">2 0 1 8</a>
                            <a href="#link2017">2 0 1 7</a>
                            <a href="#link2016">2 0 1 6</a>
                        </div>

                       
                        </div>
                        </div>


        );
    }
} 

export default Menu;