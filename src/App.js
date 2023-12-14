import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Form from './components/Form';
import Register from './components/Register';
import Nav from './components/Navbar';

function App()
{
  return(
    <div className="App">
      <Nav/>
    </div>
  );
}

export default App;