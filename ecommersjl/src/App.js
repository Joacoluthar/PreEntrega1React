
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Los mejores articulos de la NBA estan aquí'}/>
    </div>
  );
}

export default App;
