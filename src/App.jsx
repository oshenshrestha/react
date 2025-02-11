import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Music from "./pages/Spotify";
import { Photos } from "./pages/Photos";

function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/react" element={ <Home/> } />
      <Route path="/portfolio" element={ <Portfolio/> } />
      <Route path="/about" element={ <About/> } />
      <Route path="/music" element={ <Music/> } />
      <Route path="/photos" element={ <Photos/> } />
    </Routes>
    </>
  )
}

export default App
