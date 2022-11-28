//import logo from './logo.svg';
import './App.css';
import Producto from './Producto'

function App() {
  //datos que pueden venir de una API
  const productos=[
    {"nombre":"camisa","unidades":15,"precio":9.95},
    {"nombre":"chaqueta","unidades":45,"precio":20.94},
    {"nombre":"pantalón","unidades":55,"precio":12},
    {"nombre":"sombrero","unidades":55,"precio":9.95}
  ];
  return (
    <div className="App">
      <h2>Listado de productos</h2>
      {productos.map(producto => <Producto nombre={producto.nombre} unidades={producto.unidades} precio={producto.precio} />)}
    </div>
  );
}

export default App;
