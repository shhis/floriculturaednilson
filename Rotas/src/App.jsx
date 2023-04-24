import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Sobre from "./pages/Sobre.jsx";
import Produtos from "./pages/Produtos.jsx" 

import {BrowserRouter, Routes, Route} from "react-router-dom"


function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App;