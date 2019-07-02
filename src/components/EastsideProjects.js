import React, {Component} from 'react';
import './eastsideprojects.css';
import thirteen from '../images/thirteen.jpg';
import twelve from '../images/twelve.jpg';
import fifteen from '../images/fifteen.jpg';
import border from '../images/border.png';

class EastsideProjects extends Component {
    render() {
        return (
            <div className="EastsideProjects">
                <div className="EastsideProjectsPage">
                    <div className="flex-container">

                        <img
                            className="ImageBorderEastsideProjectsTop"
                            src={border}
                            alt="Purple Dashed Border"></img>

                        <div className="columnOneEastsideProjects col-5">

                            <img
                                className="ImageBorderEastsideProjectsOne"
                                src={border}
                                alt="Purple Dashed Border"></img>

                            <h2>2016</h2>

                            <img
                                className="ImageBorderEastsideProjectsTwo"
                                src={border}
                                alt="Purple Dashed Border"></img>
                            <div className="EastsideProjectsTextWrapper">
                                <div className="EastsideProjectsText">
                                    <p>ESP Production Residency I
                                        <br/>Eastside Projects, Birmingham, 2016</p>
                                    <p>Dyed Silver Gelatin Photographs, Perspex and Photographic Paper Packaging
                                    </p>

                                    <div className="EastsideProjectsTextCenter">
                                        <p className="purple">|||</p>

                                        <p>Press Release</p>
                                        <p>Chloe Ashley’s practice is invested in process, exploring photography’s
                                            materiality and questioning the photographic medium. During her three-week
                                            Production residency she will transform the second gallery/workshop into a fully
                                            functioning darkroom in order to create a body of new photographic work that
                                            responds to the space, architecture and objects that inhabit and surround
                                            Eastside Projects.</p>
                                        <p>By using the space to develop negatives and large-scale photographic works,
                                            Chloe will reveal the analogue processes and production methods that she uses to
                                            create works that disregard conventional photographic production. Rejecting the
                                            concept of flawless digital photography, the works produced throughout the
                                            residency will be subjected to a range of processes including multiple exposure,
                                            sculptural manipulation and dyeing.</p>
                                        <p>Large-scale photographs will be developed in pipes and troughs using Caffenol
                                            solution - an alternative photographic process that combines vitamin C, washing
                                            soda and coffee to create a photographic developer that can be used to process
                                            black and white negatives and photographic prints. By using this process she is
                                            able to increase the film grain within the photograph, further distorting her
                                            source imagery.</p>
                                        <p>Chloe will present the results of the residency at Digbeth First Friday on
                                            3rd June 2016. Visitors are welcome to visit the workshop to see the work in
                                            progress throughout her residency.</p>

                                    </div>
                                </div>

                            </div>

                            <img
                                className="ImageBorderEastsideProjectsThree"
                                src={border}
                                alt="Purple Dashed Border"></img>
                        </div>

                        <div className="columnTwoEastsideProjects col-5">

                            <div class="container">

                                <a className="linkImageOne" target="_blank" href={thirteen}>

                                    <img
                                        className="ImageOneEastsideProjects"
                                        src={thirteen}
                                        alt="Eastside Projects 2016"></img>
                                    <div className="EastsideProjectsoverlay"></div>
                                </a>
                            </div>

                            <div class="container">
                                <a className="linkImageTwo" target="_blank" href={twelve}>
                                    <img
                                        className="ImageTwoEastsideProjects"
                                        src={twelve}
                                        alt="Eastside Projects Install 2016"></img>
                                    <div className="EastsideProjectsoverlay"></div>
                                </a>
                            </div>

                            <div class="container">
                                <a className="linkImageThree" target="_blank" href={fifteen}>
                                    <img
                                        className="ImageTwoEastsideProjects"
                                        src={fifteen}
                                        alt="Eastside Projects 2016"></img>
                                    <div className="EastsideProjectsoverlay"></div>
                                </a>
                            </div>

                        </div>

                        <img
                            className="ImageBorderEastsideProjectsEnd"
                            src={border}
                            alt="Purple Dashed Border"></img>
                    </div>

                </div>

            </div>

        );
    }
}

export default EastsideProjects;