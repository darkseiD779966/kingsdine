import React from 'react'
import images from '../../constants/images';
import './aboutus.css';
const aboutUs = () => 
(
    <div className="app__aboutus app__bgg flex__center section__padding"id="about">
      <div className="app__aboutus-overlay flex__center">
        <img src={images.k} alt="k letter" />
    </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_aboutus">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="spoon sink" />
       <p className="p__opensans">Well established Restaurant from year 2012 from the scratch to the wellknowned enterpraunership By the Efforts of our staffs to our chefs</p>
     <button type="button" className="custom__button">Know more</button>
       </div>
      
      <div className="app__aboutus-contents_knife flex__center">
        <img src={images.plate} alt="about -knife"></img>
      </div>
     
        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="spoon sink" />
       <p className="p__opensans">Well established Restaurant from year 2012 from the scratch to the wellknowned enterpraunership By the Efforts of our staffs to our chefs</p>
     <button type="button" className="custom__buttons" >Know more</button>
       </div>
      </div>
    </div>
  );


export default aboutUs;