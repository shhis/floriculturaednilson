import './stylesmenu.css'


function Menu(){
    return(
        <div class="text-center py-3 menubar">
            <a href="/"> 
            <img  class="logo" style={{ width:'2%'}}
            src="/assets/logo.png">
            </img>
            </a>
            
            <a class="menutext" href="/sobre">Sobre Nós</a>&nbsp;&nbsp;
            <a class="mx-2 menutext" href="/sobre">Projetos</a>&nbsp;&nbsp;
            <a class="menutext" href="/sobre">Como Ajudar</a>&nbsp;&nbsp;
            <a class="mx-2 menutext" href="/sobre">Contato</a>&nbsp;&nbsp;

            
        </div>
    )
}
export default Menu;