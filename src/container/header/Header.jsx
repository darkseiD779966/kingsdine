import React from 'react'
import images from '../../constants/images';
import {Subheading} from '../../components/';
import './header.css';
const Header = () => (
  
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <Subheading title="Crave for new taste" />
       <h1 className="app__header-h1">The Key for Dining</h1>
      <p className="darkseid" style={{margin:'2rem 0'}}>Take your seat enjoy our delicious dining with exceptional flavours and tradional recepies of indian authenticity ,we are never compromising our quality as we serve people the best delights.</p>
      <button type="button" className="custom__button">Explore More</button> 
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="arishem the" width="400" height="400"/>

      
      
      </div>
    </div>
);

export default Header;