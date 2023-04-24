import Home from "./pages/Home.jsx";
import Contato from "./pages/Contato.jsx";
import Sobre from "./pages/Sobre.jsx";

import {BrowserRouter, Routes, Route} from "react-router-dom"


function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App;