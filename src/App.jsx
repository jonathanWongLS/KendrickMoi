import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Portfolio from "./views/Portfolio/Portfolio";
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <Landing /> }></Route>
        <Route path='/portfolio' element={ <Portfolio /> } />
      </Routes>
    </div>
  )
}

export default App
