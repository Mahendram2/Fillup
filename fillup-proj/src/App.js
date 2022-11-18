import { Route, Routes, Link } from "react-router-dom"
import Home from "./components/Home";
import Game from "./components/Game";
import Village from "./components/Village";
import Mission from "./components/Mission";
import './App.css';
;


function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Game">Game</Link></li>
        <li><Link to="/Village">Village</Link></li>
        <li><Link to="/Mission">Missionn</Link></li>
      </ul>
    </nav>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Game" element={<Game />} />
    <Route path="/Village" element={<Village />} />
    <Route path="/Mission" element={< Mission/>} />
    </Routes>
     
    </>
  )
 
 
    
           
}

export default App;
