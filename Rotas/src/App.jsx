import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Sobre from "./pages/Sobre.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';



import {BrowserRouter, Routes, Route} from "react-router-dom"


function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App;