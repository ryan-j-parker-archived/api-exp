import './App.css';
import { Route, Routes } from 'react-router-dom';
import Joke from './Joke';
import Experience from './Experience';
import Contents from './Contents';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Joke />} />
        <Route path="/scene" element={<Experience />} />
        <Route path="/contents" element={<Contents />} />
      </Routes>
    </div>
  )
}

export default App;
