import React from 'react'
import images from '../../constants/images';
import './chef.css';
import {Subheading} from '../../components';
const chef = () => {
  return (
    <div classNamee="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="agadi" />
    </div>  
     
<div className="app__wrapper_info">
  <Subheading title="Chefs word" />
  <h1 className="headtext__cormant">Fascinating things we give</h1>
<div className="app__chef-content">
  <div className="app__chef-content_quotes">
    <img src={images.quote} alt="qute"></img>
    <p className="p__opensans">Our chefs are best in recipes which make fingers licked</p>
  </div>
  <p className="p__opensans">They are experts in the country wide and they are determined to serve best for our organization and we are proud to have our wellknowned chefs.</p>
</div>
<div className="app__chef-sign">
  <p>Wilson paul</p>
  <p className="p_opensans">Chef & Founder</p>

</div>
</div>
    </div>
  )
}

export default chef