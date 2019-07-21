import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function MainCarousel(){
    return(
        <div className="col-sm-4 mainCarousel">
            <Carousel>
                <div className="carouselItem" >
                    <img src="https://c4.wallpaperflare.com/wallpaper/445/164/897/k-pop-loona-women-asian-wallpaper-8950f8bd417afd9bb607781f9051961d.jpg" />
                   
                </div>
                <div className="carouselItem" >
                    <img src="https://images7.alphacoders.com/906/thumb-1920-906318.jpg" />
              
                </div>
                <div className="carouselItem" >
                    <img src="https://c4.wallpaperflare.com/wallpaper/175/217/129/k-pop-loona-wallpaper-494038adc14a8d5bd657d8bf7091a65d.jpg" />
                   
                </div>
                <div className="carouselItem" >
                    <img src="https://c4.wallpaperflare.com/wallpaper/119/508/2/loona-k-pop-choerry-wallpaper-6970f80dd1ba5d4b862778dfc051561d.jpg" />
                   
                </div>
                <div className="carouselItem" >
                    <img src="https://c4.wallpaperflare.com/wallpaper/579/6/548/k-pop-loona-asian-women-wallpaper-a97018dd919a4ddbe6f7485f6011d62d.jpg" />
                   
                </div>
            </Carousel>
        </div>
          
      
    )
}
export default MainCarousel;
