// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Lovett from "./pages/Lovett";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
