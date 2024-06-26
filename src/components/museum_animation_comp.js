import React from 'react'
import ManStand from '../assets/images/men_stand.png'

function museum_animation_comp() {
  return (
    <div className='wall_parent'>
        <div className='big_wall'></div>
        <div className='floor'></div>
        <img src={ManStand} className='man_stand'/>
    </div>
  )
}

export default museum_animation_comp