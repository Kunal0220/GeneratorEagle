import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './Components/Landing/Landing';
import Generator from './Components/Generator/Generator';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
     



      <Routes>
      <Route path="/" element={ <Landing/>} />
      <Route path="/generator" element={<Generator />} />
      <Route path="/about" element={<About />} />
    </Routes>


    </div>
  );
}

export default App;
