import React from 'react'

export const NavBar = () => {
    // boton de practica
    const estilos = {color: 'red', fontSize: '20px'};
  const handleClick= () => {
  alert('Bienvenido');
  }
  return (
    <div>
        <div className='barra'>
       <a href="">Inicio</a>
       <a href="">Masculinos</a>
       <a href="">Femeninos</a>
       <a href="">Nuevos ingresos</a>
        <div/>
      
  </div>


{/* boton de practica */}
        <div>
            <button  className='btn' onClick={handleClick}>Click para saludar</button>
         </div>
    </div>
  )
}

export default NavBar
