import './App.css';
import freeCodeCamp from "./imagenes/freecodecamp-logo.png";
import ListaTareas from './componentes/ListaTareas';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCamp}
          className='freecodecamp-logo' 
        />
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
