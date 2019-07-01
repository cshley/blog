import React, {Component} from 'react';
import './home.css';

class Home extends Component {
    render() {
        return (
    <div className="Home" id="linkhome">
       
        <div className="HomePage">
              
        <div className="flex-container">
        <div className="columnOneHome col-12">
        <img 
                        className="ImageBorderHomeTop" 
                        src="/images/border.png"
                        alt="Purple Dashed Border">
        </img> 
        
            
        
            <img className="ImageOneHome" 
                        src="/images/twentyone.jpeg"
                        alt="Bog">
            </img>
            <img className="ImageTwoHome" 
                        src="/images/twentyone.jpeg"
                        alt="Bog">
            </img>
    
            

        
            </div>
            </div>
        </div>
        
    </div>
    
            );
        }
    } 
    
    export default Home;