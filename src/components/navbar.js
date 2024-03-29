import React from "react";
import NavbarItem from './navbarItem'
import { AuthConsumer } from "../main/provedorAutenticacao";




function Navbar(props){
    return(
        
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary" >
      <div className="container">
        <a href="#/home" className="navbar-brand">Minhas Finanças</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
          <NavbarItem render={props.isUsuarioAutenticado} href="#/home" Label="Home"></NavbarItem>
          <NavbarItem render={props.isUsuarioAutenticado} href="#/cadastro-usuarios" Label="Usuários"></NavbarItem>
          <NavbarItem render={props.isUsuarioAutenticado} href="#/consulta-lancamentos" Label="Lancamentos"></NavbarItem>
          <NavbarItem render={props.isUsuarioAutenticado} onClick={props.deslogar} href="#/login" Label="Sair"></NavbarItem>
            <li class="nav-item">
            
            <a class="nav-link" href="home.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="usuarios.html">Usuários</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="lancamentos.html">Lançamentos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="login.html">Login</a>
          </li>
       
          
        </ul>

        </div>
      </div>
    </div>

    )
}

export default () => (
  <AuthConsumer>
    {(context) => (
      <Navbar isUsuarioAutenticado={context.isAutenticado} deslogar={context.encerrarSessao}></Navbar>

    )}
  </AuthConsumer>
)