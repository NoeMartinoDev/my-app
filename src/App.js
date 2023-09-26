import './App.css';
import ListaPersonas from './components/ListaPersonas';

let listaPersonas = [
  {name: "Julieta", age: 20},
  {name: "Enrique", age: 30},
  {name: "Julián", age: 40}
]

function App() {
  return (
    <div className="App">
      <ListaPersonas lista={listaPersonas}/>
    </div>
  );
}

export default App;
