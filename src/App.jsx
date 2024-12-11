import Header from "./component/Header"
import CarritoContador from "./component/CarritoContador"
import NavBar from "./component/NavBar"
import Galeria from "./component/Galeria"
import Footer from "./component/Footer"


function App() {

  const handleAddToCart = (quantity) => {
    alert(`Agregaste ${quantity} productos al carrito`);
  }

  return (
    <>
     <CarritoContador stock = {3} initial = {1} onAdd={handleAddToCart} /> 
    <Header/>
    <NavBar/>
    <Galeria/>
    <Footer/>
    </>
  )
}

export default App
