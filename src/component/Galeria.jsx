import React from 'react'
import img2 from '../img/frascos.jpg'
import img3 from '../img/frascoscinco.jpg'
import img4 from '../img/frascoscuatro.jpg'

export const Galeria = () => {

  return (
    <div>
        <div className='contenedor'>
      <img className='image2' src={img2} alt="" />
      </div>
      <button className='btn2'>Agregar</button>
      <div className='contenedor'>
      <img className='image2' src={img3}  alt="" />
      </div>
      <button className='btn2'>Agregar</button>
      <div className='contenedor'>
      <img className='image2' src={img4}  alt="" />
      </div>
      <button className='btn2'>Agregar</button>


    </div>
  )
}

export default Galeria
