import React, {Component} from 'react';
import './summercamp.css';
import one from '../images/summerCampMinerals.png';
import nineteen from '../images/nineteen.png';
import seventeen from '../images/seventeen.png';
import eighteen from '../images/eighteen.png';
import border from '../images/border.png';

class SummerCamp extends Component {
    render() {
        return (
            <div className="SummerCamp">

                <div className="SummerCampPage">

                    <div className="flex-container">

                        <div className="columnOneSummerCamp col-5">

                            <div class="container ">
                                <a className="linkImageOne" target="_blank" href={one}>
                                    <img className="ImageOneSummerCamp" src={one} alt="Summer Camp 2018"></img>
                                    <div className="SummerCampoverlay"></div>
                                </a>
                            </div>

                            <div class="container">

                                <a className="linkImageOne" target="_blank" href={nineteen}>
                                    <img className="ImageTwoSummerCamp" src={nineteen} alt="Summer Camp 2018"></img>
                                    <div className="SummerCampoverlay"></div>
                                </a>
                            </div>

                            <div class="container">

                                <a className="linkImageOne" target="_blank" href={seventeen}>
                                    <img className="ImageThreeSummerCamp" src={seventeen} alt="Summer Camp 2018"></img>
                                    <div className="SummerCampoverlay"></div>
                                </a>
                            </div>

                            <div class="container">

                                <a className="linkImageOne" target="_blank" href={eighteen}>
                                    <img className="ImageFourSummerCamp" src={eighteen} alt="Summer Camp 2018"></img>
                                    <div className="SummerCampoverlay"></div>
                                </a>
                            </div>

                        </div>

                        <div className="columnTwoSummerCamp col-5">

                            <img
                                className="ImageBorderSummerCampOne"
                                src={border}
                                alt="Purple Dashed Border"></img>

                            <h2 id="link2018">2018</h2>

                            <img
                                className="ImageBorderSummerCampTwo"
                                src={border}
                                alt="Purple Dashed Border"></img>

                            <div className="SummerCampTextWrapper">
                                <div className="SummerCampText">
                                    <p>Summer Camp-Work in Progress,
                                        <br/>Eastside Projects, Birmingham, 2018</p>

                                    <p>
                                        Moving Image and Text</p>

                                    <div className="SummerCampTextCenter">
                                        <p className="purple">|||</p>
                                        <p>Photographic Developer Ingredients:</p>

                                        <p>150ml Myriophyllum Spicatum Liquid<br/>
                                            (Canterbury, UK)</p>

                                        <p>Myriophyllum Spicatum is a submerged aquatic plant that grows in still or
                                            slow moving waters. The species is extremely invasive and grows quickly,
                                            overcrowding areas and 
                                            <i> continually creating dark spaces. 
                                            </i>
                                            When exposed to blue green algae, Myriophyllum Spicatum produces chemicals such
                                            as gallic and pyrogallic acid, preventing the algae’s development.</p>
                                        <p className="purple">|||</p>
                                        <p>100ml Peat Bog Liquid
                                            <br/>
                                            (Hothfield Heath, UK)</p>

                                        <p>sphagnum moss sphagnum moss
                                            <br/>
                                            sphagnum moss root peat root<br/>
                                            tannins decay gallic acid root root<br/>
                                            <i>gallic acid gallic acid gallic acid gallic acid</i><br/>
                                            a photograph. turning purple. then black<br/>
                                            <i>gallic acid gallic acid gallic acid gallic acid</i><br/>
                                            wet decayed vegetation wet<br/>
                                            peat wet peat wet wet wet peat rot rot<br/>
                                            carbon carbon carbon carbon carbon</p>
                                        <p className="purple">|||</p>
                                        <p>50g Green Vitriol</p>

                                        <p>[...] there is nothing so beautiful as the photographic negative developed
                                            completely in iron.</p>

                                        <p>(FeSO4·7H2O) Ferrous Sulfate or Iron(II) Sulfate is most commonly encountered
                                            as a blue-green heptahydrate, which has been known since ancient times as
                                            Copperas or Green Vitriol. FeSO4·7H2O is usually the starting point in the
                                            preparation of iron pigments. When pure, Green Vitriol forms fine sea green
                                            crystals, that produce an astringent metallic taste.</p>

                                        <p>THE GREEN LION DEVOURS THE SUN</p>
                                        <p className="purple">|||</p>
                                        <p>Alkali One:<br/>
                                            50g Grated Chalk<br/>
                                            (Margate, UK)</p>

                                        <p>CaCO3-Calcium Carbonate* (Chalk) 9.91 (pH)
                                            <br/>soft. white. porous. deep marine formations. accumulation of calcite
                                                shells. indigestion relief.</p>

                                        <p>The important constituents of a photographic developer are; the development
                                            agent, such as gallic or pyrogallic acid, (see 
                                            <i> Myriophyllum Spicatum </i> 
                                            and
                                             <i> Peat Bog </i>
                                            ) and an alkali. A developing agent is a reducing agent that will remove halogen
                                            particles, but only if a latent image is present. Nearly all developing agents
                                            only operate efficiently in an alkaline solution (i.e at a pH greater than 7).</p>

                                        <p className="purple">|||</p>

                                        <p>Alkali Two:<br/>
                                            70g Surf Tropical Lily and Ylang Ylang Powder Detergent</p>

                                        <p>|Liquid Crystals|<br/>
                                            soapy detergent/cell membrane/lcd screen</p>

                                        <p>We hope to move past the screen.<br/>
                                            Inhabit the topside of the surface for a short time only, then push through the
                                            glass and toxic polymers.<br/>
                                            Dive in.<br/>
                                            Touch the systems and layers.
                                            <br/>
                                            Submerge within a liquid silky soft that will make the skin itch and the
                                            fingernails peel.<br/>
                                            Feel heat that will eventually dissolve into the glacial.
                                            <br/>
                                            We crawl through the gooey molecules and embrace the crystalline.</p>

                                        <p>dark pixels | developed<br/>
                                            silver nanoparticles</p>

                                    </div>

                                </div>

                            </div>
                            <img
                                className="ImageBorderSummerCampEnd"
                                src={border}
                                alt="Purple Dashed Border"></img>
                        </div>

                    </div>

                </div>

            </div>

        );
    }
}

export default SummerCamp;