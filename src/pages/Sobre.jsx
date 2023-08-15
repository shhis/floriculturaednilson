import Menu from "./Menu";
import './stylesmenu.css'


function Sobre(){
    return(
        <div>
            <Menu/>

            <div>
                
                <div class="d-flex justify-content-center my-3">
                <img class="imagemtime"
                src="https://images.pexels.com/photos/7109063/pexels-photo-7109063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                </div>

                <div class="quemsomos">
                <h1 class="text-center quemsomostitle">Quem Somos:</h1>
        
            <p class="text-center">Lorem ipsum dolor sit amet elit. Dolorum minima repudiandae illum. Accusantium dignissimos nostrum, doloremque voluptate eaque quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis aspernatur architecto temporibus optio laboriosam corrupti soluta, harum mollitia! Iste voluptatibus similique quasi hic beatae nisi repellendus pariatur fuga maxime.</p>
                    
                </div>
            
           
        
            </div>
        </div>
    )
}
export default Sobre;