import React, {Component} from 'react';
import './home.css';
import twentyOne from '../images/twentyone.jpeg';
import border from '../images/border.png';

class Home extends Component {
    render() {
        return (
            <div className="Home" id="linkhome">

                <div className="HomePage">

                    <div className="flex-container">
                        <div className="columnOneHome col-12">
                            <img className="ImageBorderHomeTop" src={border} alt="Purple Dashed Border"></img>

                            <img className="ImageOneHome" src={twentyOne} alt="Bog"></img>
                            <img className="ImageTwoHome" src={twentyOne} alt="Bog"></img>

                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Home;