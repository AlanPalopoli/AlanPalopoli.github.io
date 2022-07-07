import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* Paginas */
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Detalle from './pages/Detalle';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart/Cart'
import Ofertas from './pages/Ofertas';
import LogIn from './pages/LogIn';
import SignUp from '../src/pages/SignUp';
import { CartProvider } from './context/CartContext';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route
              element={(
                <>
                  <NavBar />
                  <Outlet />
                </>
              )}
            >
                <Route path='/' element={<Home />}/> 
                <Route path='/product/:id' element={ <Detalle />}/>
                <Route path='/products/:category' element={<ProductList />}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='/ofertas' element={<Ofertas />}/>
                <Route path='*' element={<NotFound />}/>  
              </Route>
              <Route path='/login' element={<LogIn />}/>
              <Route path='/signup' element={<SignUp />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;