import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ToolBar from './components/ToolsBar/ToolBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* Paginas */
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Contacto from './pages/Contact';
import Detalle from './pages/Detalle';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart/Cart'
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <ToolBar />
          <Routes>
            <Route path='/' element={<Home />}/> 
            <Route path='/contact' element={<Contacto />}/>  
            <Route path='/product/:id' element={ <Detalle />}/>
            <Route path='/products/:category' element={<ProductList />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='*' element={<NotFound />}/>  
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;