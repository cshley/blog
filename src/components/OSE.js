import React, {Component} from 'react';
import './ose.css';
import five from '../images/five.jpg';
import four from '../images/four.jpg';
import sixteen from '../images/sixteen.jpg';
import border from '../images/border.png';

class OSE extends Component {
    render() {
        return (
            <div className="OSE">

                <div className="OSEPage">
                    <div className="flex-container">
                        <img className="ImageBorderOSETop" src={border} alt="Purple Dashed Border"></img>

                        <div className="columnOneOSE col-5">

                            <img className="ImageBorderOSEOne" src={border} alt="Purple Dashed Border"></img>

                            <h2 id="link2017">2017</h2>

                            <img className="ImageBorderOSETwo" src={border} alt="Purple Dashed Border"></img>
                            <div className="oseTextWrapper">
                                <div className="oseText">
                                    <p>Y TNT
                                        <br/>The Well, Open School East, Margate, 2017</p>

                                    <p>Silver Gelatin Photographs fixed with Isle of Thanet Seawater and Lavender
                                        Oil, Stoneware ceramic , River Water (Wantsum Channel), Thanet Ash Glaze,
                                        English Oak (Stripped of bark and burnt), Clay, Chalk, Acorns, Bladderwrack,
                                        Gypsum, Alexander, Alluvium, Flint, Sand, Oyster and Mollusc Shells</p>

                                    <p>Materials sourced from the Isle of Thanet</p>

                                    <div className="oseTextCenter">
                                        <p className="purple">|||</p>
                                        <p>Thanet
                                            <br/>
                                            <i>Isle of Thanet</i>
                                        </p>
                                        <p>Y TNT / Tonatis / Toliatis / Tane’tus / Tenid / Tenet / Taneth / Tanarth</p>
                                    </div>

                                    <div className="oseTextCenter">
                                        <p>celtic teine meaning
                                            <i>Fire</i><br/>
                                            celtic tann meaning
                                            <i>Oak</i><br/>
                                            celtic arth (aird(e) meaning
                                            <i>Height</i><br/>
                                            <br/>
                                            Wantsum Channel > wandsum > want sich um<br/>
                                            <i>Winds around itself</i>
                                        </p>
                                    </div>

                                    <div className="oseTextCenter">
                                        <p className="purple">|||</p>
                                        <p>Soak (the paper) in a weak solution of sea-salt, and, when dry, rub it over
                                            on one side with a solution of Lunar Caustic, by which Silver Nitrate is formed,
                                            and adheres to the paper. As thus prepared, it acquires a dark colour on
                                            exposure to light; the depth of colour depending on the strength of the
                                            solution; hence it may vary from lilac to deep purple, approaching to black.</p>
                                    </div>

                                    <div className="oseTextCenter">
                                        <p className="purple">|||</p>
                                        <p>Lu-nar (Loon’∂r) C
                                            <i>
                                                (crescent)
                                            </i>
                                            <br/>
                                            L. luna moon-in alchemy, silver, for which the moon was the symbol. Pertaining
                                            to or including silver, as lunar caustic or silver nitrate</p>
                                    </div>

                                    <div className="oseTextCenter">
                                        <p className="purple">|||</p>
                                        <p>3,4,5-trihydroxybenzoic acid,
                                            <br/>C6H2(OH)3CO2H
                                            <br/>Gallic Acid</p>

                                        <p>Gallic acid is found in oak bark and many other plants, both in its free
                                            state and as part of the tannin molecule. Upon heating, gallic acid is converted
                                            to pyrogallol or 1,2,3-trihydroxybenzene, which are used in laboratories for
                                            absorbing oxygen, and in the production of photographic developers.</p>
                                    </div>

                                </div>
                            </div>

                            <img className="ImageBorderOSEThree" src={border} alt="Purple Dashed Border"></img>
                        </div>

                        <div className="columnTwoOSE col-5">

                            <div class="container">

                                <a className="linkImageOne" target="_blank" href={sixteen}>

                                    <img className="ImageOneOSE" src={sixteen} alt="Open School East Install 2017"></img>
                                    <div className="OSEoverlay"></div>
                                </a>
                            </div>

                            <div class="container">
                                <a className="linkImageTwo" target="_blank" href={four}>
                                    <img className="ImageTwoOSE" src={four} alt="Open School East Install 2017"></img>
                                    <div className="OSEoverlay"></div>
                                </a>
                            </div>

                            <div class="container">
                                <a className="linkImageThree" target="_blank" href={five}>
                                    <img className="ImageTwoOSE" src={five} alt="Open School East Install 2017"></img>
                                    <div className="OSEoverlay"></div>
                                </a>
                            </div>

                        </div>

                        <img className="ImageBorderOSEEnd" src={border} alt="Purple Dashed Border"></img>

                    </div>

                </div>

            </div>

      );
    }
  } 

export default OSE;