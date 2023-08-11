import Menu from "./Menu";
import Produto1 from "../components/Produto1";
import Produto2 from "../components/Produto2";


function Produtos(){
    return(
        <div>
            <h1>Nossos Produtos:</h1>
            <table>
                <tr>
                <td> <Produto1/> </td>
                <td> <Produto2/> </td>
                </tr>
                <td> <Produto2/> </td>
                <td> <Produto1/> </td>
            </table>
            
            <Menu/>
        </div>
    )
}
export default Produtos;