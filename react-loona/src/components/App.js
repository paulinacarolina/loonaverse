import React from 'react'
import Footer from "./Footer"
import MyInfo from "./MyInfo"
import Header from "./Header"
import 'bootstrap/dist/css/bootstrap.min.css';
 class App extends React.Component{

   render(){
    return(
      <div> 
        
        <MyInfo/>
        <Header/>
        <Footer/>
      </div>
     
    );
   }
  

 }
 export default App;
