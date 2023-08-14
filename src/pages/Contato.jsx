import Menu from "./Menu";
import './stylesmenu.css'


function Contato(){
    return(
        <div>
            <Menu></Menu>
            <div class="contatodiv d-flex justify-content-center py-3 my-3">
                <div>
                <p class="contato">contato@watchgood.com.br</p>
                <p class="contato">+55 11 98765-4321</p>
                <p class="contato">São Paulo SP. Rua Lorem Ipsum 123</p>
                </div>
            </div>
        </div>
    )
}
export default Contato;