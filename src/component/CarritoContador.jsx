import React, { useState } from 'react'
import { styles } from "../service/styles"

export const CarritoContador = ( {stock = 20, initial = 1, onAdd}) => {

  const [count, setCount] = useState(initial);

  const handleIncrement = () =>{
    if (count < stock){
      setCount(count + 1);
    }
  };


  const handleDecrement = () =>{
    if (count > 1 ) {
      setCount(count - 1);
    }
  }
 


  return (
    <div className='carrito'>
    <div style={styles.container}>
      <h1 style={styles.title}>Perfume nuevo</h1>

        <div style={styles.CounterContainer}>
        
        <button 
        style={{
          ...styles.button,
          ...(count === 1 ? styles.disabledButton : {}),
        }}
        onClick={handleDecrement}
        disabled={count === 1}
        >
          -
        </button>

        {/* container */}
        <span styles={styles.counter}> {count} </span>

        <button 
        style={{
          ...styles.button,
          ...(count === stock? styles.disabledButton : {}),
        }}
        onClick={handleIncrement}
        disabled={count === stock}
        >
          +
        </button>
        
        {/* agregar al carrito */}
        <div>
        <button style={styles.addButton}
              onClick={()=> onAdd(count)}
        >
           Agregar fragancia
        </button>
        </div>


        </div>
    </div>
  </div> 
  )
}

export default CarritoContador
