import React from 'react'
import images from '../../constants/images';
import data from '../../constants/data';
import {Subheading,Menuitem} from '../../components';
import './menu.css';
const menu = () => {
  return (
    <div className="app__menu flex__center section__padding" id="menu">
      <div className='app__menu-title'>
        <Subheading title="Menu that fits you palette" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>
   <div className="app__menu-menu">
    <div className="app__menu-menu_wine flex__center ">
      <p className="app__menu-menu_heading">Wine & Bar</p>
<div className="app__menu_menu_items">
  {data.wines.map((wine,index)=>(
  <Menuitem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
 ))}
</div>
    </div>
    <div className="app__menu-img">
      <img src={images.menu} alt="menu iamge">
      </img>
    </div>
    <div className="app__menu-menu_cocktails flex__center ">
      <p className="app__menu-menu_heading">Cocktails</p>
<div className="app__menu_menu_items">
  {data.cocktails.map((cocktail,index)=>(
     <Menuitem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
 ))}
</div>
    </div>
   </div>
   <div style={{marginTop:'15px'}}>
    <button type="button" className="custom__buttoner" id="doctor">View More</button>
   </div>
    </div>
  )
}

export default menu