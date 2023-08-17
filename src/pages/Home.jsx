import Menu from "./Menu"
import Produto1 from "../components/Produto1";
import './stylesmenu.css'


function Home(){
    return(
        <div>
            <Menu></Menu>
                <Produto1/>
                <h1 class="title text-center my-5">Nossa Missão</h1>
                <div class="d-flex justify-content-center my-3 text-center">
                    <img class="mx-5 imgmain"
                     src="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <div class="caixamissao"> 
                        <h3>Para um futuro melhor</h3>
                        <p class="missaoexplica"> Em um mundo com 15,5% da população sofre de depressão, várias pessoas são afetadas por cardiopatias, que podem causar infartos. Nós desenvolvemos um SmartWatch especificamente treinado para o monitoramento para os afetados, além de checar seu pulso 24 horas por dia, ele consegue alertar quando estiver em risco</p>
                    </div>
                </div>

        </div>
    )
}
export default Home