import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Inicio from './components/inicio';

function App() {
  return (
    <div className='App'>
      <NavbarComp/>
      <Inicio/>
    </div>
  );
}

export default App;
