import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function MainCarousel(){
    return(
        <div id="mainCarousel" className="col-lg-6">
            <Carousel>
                <div>
                    <img src="https://c4.wallpaperflare.com/wallpaper/445/164/897/k-pop-loona-women-asian-wallpaper-8950f8bd417afd9bb607781f9051961d.jpg" />
                   
                </div>
                <div>
                    <img src="https://images7.alphacoders.com/906/thumb-1920-906318.jpg" />
              
                </div>
                <div>
                    <img src="https://c4.wallpaperflare.com/wallpaper/175/217/129/k-pop-loona-wallpaper-494038adc14a8d5bd657d8bf7091a65d.jpg" />
                   
                </div>
            </Carousel>
        </div>
          
      
    )
}
export default MainCarousel;
