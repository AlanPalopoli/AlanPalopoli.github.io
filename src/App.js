import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ToolBar from './components/ToolsBar/ToolBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ToolBar /> */}
      {/* <ItemListContainer  title = {'Objetos destacados'}/> */}
      <ItemDetailContainer />

    </div>
  );
}

export default App;
