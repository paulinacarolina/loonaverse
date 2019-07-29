import React from 'react'
import Footer from "./Footer"
import MyInfo from "./MyInfo"
import Header from "./Header"
import MainCarousel from "./MainCarousel"
import Welcome from "./Welcome"
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo';
import MembersGallery from './MembersGallery'
class App extends React.Component {

  render() {
    return (
      <div >
        <Welcome />

        <MembersGallery/>
        <MembersGallery/>
        <MembersGallery/>
        <MyInfo />
        <Logo />
     
        <Footer />
       
      </div>

    );
  }


}
export default App;
