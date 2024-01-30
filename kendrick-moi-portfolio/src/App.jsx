import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <Landing /> }></Route>
      </Routes>
    </div>
  )
}

export default App
