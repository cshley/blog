import React, {Component} from 'react';
import './nagw.css';
import six from '../images/six.jpg';
import eight from '../images/eight.jpg';
import seven from '../images/seven.jpg';
import ten from '../images/ten.jpg';
import border from'../images/border.png';

class NAGW extends Component {
    render() {
        return (
    <div className="NAGW">
      
        <div className="NAGWPage">
       
            <div className="flex-container">


                <div className="columnOneNAGW col-5">
                        

                <div class="container">   
                    <a className="linkImageOne" target="_blank" href="/images/six.jpg">
                            <img 
                            className="ImageOneNAGW" 
                            src={six}
                            alt="New Art Gallery Walsall Install 2016">
                            </img>
                            <div className="NAGWoverlay"> </div>
                    </a>
                </div>
                
                <div class="container">    
                        
                    <a className="linkImageOne" target="_blank" href="/images/eight.jpg">      
                            <img 
                            className="ImageTwoNAGW" 
                            src={eight}
                            alt="New Art Gallery Walsall Install 2016">
                            </img>
                            <div className="NAGWoverlay"> </div>
                    </a>      
                </div>        
                
                <div class="container">   
                        
                    <a className="linkImageOne" target="_blank" href="/images/seven.jpg">
                        <img 
                        className="ImageThreeNAGW" 
                        src={seven}
                        alt="New Art Gallery Walsall Install 2016">
                        </img>
                        <div className="NAGWoverlay"></div>
                    </a>     
                </div>       
                
                <div class="container"> 

                    <a className="linkImageOne" target="_blank" href="/images/ten.jpg">
                        <img 
                        className="ImageFourNAGW" 
                        src={ten}
                        alt="New Art Gallery Walsall Install 2016">
                        </img>
                        <div className="NAGWoverlay"></div>
                     </a> 
                </div>

                </div>   


                <div className="columnTwoNAGW col-5">
                  
                  <img 
                      className="ImageBorderNAGWOne" 
                      src={border}
                      alt="Purple Dashed Border">
                    </img>

                   <h2 id="link2016">2016</h2>
                  
                   <img 
                      className="ImageBorderNAGWTwo" 
                      src={border}
                      alt="Purple Dashed Border">
                    </img>
                    
                    <div className="nagwTextWrapper">
                      <div className= "nagwText">
                        <p>The Building as Material
                        <br />The New Art Gallery Walsall, 2016</p>
                        
                        <p>Dyed Silver Gelatin Photographs, 
                            Walnut, Concrete, Timber and Photographic Packaging</p>
                        

                        <div className="nagwTextCenter">
                            <p className="purple">|||</p>
                            <p>Press Release</p>
                            
                            <p>Twenty years ago, London-based architects Caruso St John
                                were selected to design a new gallery for Walsall
                                after winning a high profile international competition.
                                Since opening in 2000, the resulting 37-metre-high building,
                                clad in terracotta tiles and punctuated by large windows,
                                has been a source of inspiration for artists.
                            </p>
                       
                            <p>In June 2016, The New Art Gallery Walsall invited applications from artists
                                based in the West Midlands for residency proposals in response to the theme:
                                The Building as Material’. Following this open call, artist Chloe Ashley
                                has been selected to develop a new body of work from the Gallery’s 1st Floor Artists’ Studio,
                                taking inspiration from the forms and materials that identify the building.
                            </p>

                            <p>Ashley works with analogue photography
                                and her practice is often driven by a response to site.
                                She will use her residency to photographically respond to the Gallery architecture,
                                utilising a 35mm film camera to produce silver gelatin prints,
                                for which she will design a variety of experimental display structures.
                                These structures will utilise the raw materials of The New Art Gallery Walsall
                                building (concrete, leather, Douglas fir, walnut, terracotta, stainless steel)
                                and reference the signature forms and views that identify the Gallery architecture.
                            </p>

                            <p>Chloe Ashley studied Fine Art at Loughborough University from 2010-13.
                                She will begin a two-year Masters programme in Photography at the Royal College of Art,
                                London, in 2017. Ashley lives in Lichfield and works from her darkroom space at AirSpace Gallery,
                                Stoke-on-Trent.
                             </p>

                            
          
                                          
                         </div>

                        

                        </div>
                       
                                       
                    </div>
                    <img 
                        className="ImageBorderNAGWEnd" 
                        src={border}
                        alt="Purple Dashed Border">
                        </img>     
            </div>
            </div>
            
        </div>
        
    </div>

        );
    }
} 

export default NAGW;