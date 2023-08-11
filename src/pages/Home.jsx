import Menu from "./Menu"
import Produto1 from "../components/Produto1";

function Home(){
    return(
        <div>
            <Menu></Menu>
                <Produto1/>
                <h1 class="missao text-center my-5">Nossa Missão</h1>
                <div class="d-flex justify-content-center my-3 text-center">
                    <img class="mx-5"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo05ScY_j9asE4xnRTHa0jo3Xl6m9ufluWhw&usqp=CAU"></img>
                    <div class="caixamissao"> 
                        <h3>Para um futuro melhor</h3>
                        <p class="missaoexplica">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quam quo aliquam reiciendis sapiente! Vitae perspiciatis quos doloremque explicabo natus eius libero neque! Nostrum doloribus voluptatem ipsa velit consequuntur saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

        </div>
    )
}
export default Home