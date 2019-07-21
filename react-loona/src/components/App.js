import React from 'react'
import Footer from "./Footer"
import MyInfo from "./MyInfo"
import Header from "./Header"
import MainCarousel from "./MainCarousel"
import Welcome from "./Welcome"
import 'bootstrap/dist/css/bootstrap.min.css';
 class App extends React.Component{

   render(){
    return(
      <div className="mainDiv"> 
       <Welcome />
       <div className="body">
       <MyInfo/>
        <MainCarousel/>
        <Header/>
        <Footer/>

       </div>
       
      </div>
     
    );
   }
  

 }
 export default App;
