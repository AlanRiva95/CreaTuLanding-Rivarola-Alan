import React from 'react'
import img1 from '../img/logo1.jpg'

export const Header = () => {
  
return (
  <div>
      <h2 className='titulo'>Alianza Perfumes</h2>
         <div className='contenedor'>
            <img className='image' src={img1} alt="logo"  />
        </div>
  </div>
)
}

export default Header
