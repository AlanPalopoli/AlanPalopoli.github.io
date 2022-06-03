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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <ToolBar />
        <Routes>
          <Route path='/' element={<Home />}/> 
          <Route path='/contact' element={<Contacto />}/>  
          <Route path='/products/:id' element={ <Detalle />}></Route>
          <Route path='/products/:category' element={<ProductList />}/>
          <Route path='*' element={<NotFound />}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
