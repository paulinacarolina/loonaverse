import React from 'react'
import Footer from "./Footer"
import MyInfo from "./MyInfo"
import Header from "./Header"

 class App extends React.Component{

   render(){
    return(
      <div> 
        <Header/>
        <MyInfo/>
        <Footer/>
      </div>
     
    );
   }
  

 }
 export default App;
