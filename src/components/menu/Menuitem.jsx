import React from 'react'
import './menuitem.css';

const Menuitem = ({title,price,tags}) => {
  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <p className="p__cormant" style={{color: '#DCCAB7'}}>{title}</p>
        </div>
        <div className="app__menuitem-dish "/>
        <div className="app__menuitem-price">
          <p className="p__cormant" style={{color:'#8664d4'}}>{price}</p>
        </div>   
      </div>
      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{colo:'#AAA1'}}>{tags}</p>
      </div>
    </div>
  )
}

export default Menuitem