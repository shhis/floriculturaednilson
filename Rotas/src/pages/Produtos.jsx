import Menu from "./Menu";
import Produto1 from "../components/Produto1";
import Produto2 from "../components/Produto2";


function Produtos(){
    return(
        <div>
            <h1>Nossos Produtos:</h1>
            <div>
                <Produto1/>
                <Produto2/>
                <br></br>
                <Produto1/>
                <Produto2/>

            </div>
            <Menu/>
        </div>
    )
}
export default Produtos;