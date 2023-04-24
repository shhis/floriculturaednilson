import Menu from "./Menu";

function Contato(){
    return(
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Usuário"></input>
                <br></br>
                <input type="password" placeholder="Senha"></input>
                <br></br>
                <button>Confirmar</button>
            </form>
            <Menu/>
        </div>
    )
}
export default Contato;