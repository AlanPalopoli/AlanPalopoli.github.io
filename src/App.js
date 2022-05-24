import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/CardsItems/ItemListContainer.js'

function App() {
  return (
    <div className="App">
      <NavBar />
        <ItemListContainer  title = {'Lista de objetos'}/>
    </div>
  );
}

export default App;
