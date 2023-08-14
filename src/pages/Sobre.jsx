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
            
            <h1>Quem Somos:</h1>
        
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum expedita consequatur officia minima repudiandae illum rerum esse, quas nulla corrupti cupiditate provident atque. Accusantium dignissimos nostrum, doloremque voluptate eaque quaerat.</p>
        
            </div>
        </div>
    )
}
export default Sobre;