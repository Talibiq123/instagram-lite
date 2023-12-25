import './App.css';
import Signup from './Components.js/Signup';

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup/>}/>
    </Routes>
  );
}

export default App;
