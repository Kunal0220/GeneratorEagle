import './App.css';
import Header from './components/Header';
import Generator from './components/Generator';
import Line from './components/Line';
import Homepage from './components/Homepage';
import Profile from './components/Profile';

function App() {
  return (
    <div className='line'>
      <div><Header /></div>
      <div>
      <Line/>
    </div>
    <br/><br/><br/><br/>
    <div><Generator/></div>
    <br/>
      <div><Profile/></div>
    </div>
  );
}

export default App;
