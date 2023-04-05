import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import UsuarioService from "../app/service/usuarioService";
import { mensagemSucesso, mensagemErro } from '../components/toastr'
import { error } from "toastr";


class CadastroUsuario extends React.Component{

    state = {
        nome : '',
        email : '',
        senha : '',
        senhaRepeticao : ''
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    

    cadastrar = () => {
        const { nome, email, senha, senhaRepeticao} = this.state
        const usuario = { nome, email, senha, senhaRepeticao}

        try{
            this.service.validar(usuario);

        }catch(erro){
            const msgs = error.mensagens;
            msgs.forEach(msg => mensagemErro(msg));
            return false;
        }
        this.service.salvar(usuario)
        .then( response => {
            mensagemSucesso('Usuario cadatrado com sucesso! Faça o login para acessar o sistema.')
            this.props.history.push('/login')
        }).catch(error => {
            mensagemErro(error.response.data)
        })
    }

    cancelar = () => {
        this.props.history.push('/login')
    }

    render(){
        return (
            
                <Card title="Cadastro de Usuario">
                    <div class="row">
                            <div class="col-lg-12">
                                <div class="bs-component">
                                    <FormGroup Label="Nome: *" htmlFor="inputNome">
                                        <div>Nome *</div>
                                        <input type="text"
                                                id="inputNome"
                                                className="form-control"
                                                name="nome"
                                                onChange={e => this.setState({nome: e.target.value})} ></input>

                                        

                                    </FormGroup>
                                    <FormGroup Label="Email: *" htmlFor="inputEmail">
                                        <div>Email *</div>
                                        <input type="Email"
                                                id="inputEmail"
                                                className="form-control"
                                                name="email"
                                                onChange={e => this.setState({email: e.target.value})} ></input>

                                        

                                    </FormGroup>
                                    <FormGroup Label="Senha: *" htmlFor="inputSenha">
                                        <div>Senha *</div>
                                        <input type="password"
                                                id="inputSenha"
                                                className="form-control"
                                                name="senha"
                                                onChange={e => this.setState({senha: e.target.value})} ></input>

                                        

                                    </FormGroup>
                                    <FormGroup Label="Repita a Senha: *" htmlFor="inputsenhaRepeticao">
                                        <div>RepitaSenha *</div>
                                        <input type="senhaRepeticao"
                                                id="inputsenhaRepeticao"
                                                className="form-control"
                                                name="senhaRepeticao"
                                                onChange={e => this.setState({senhaRepeticao: e.target.value})} ></input>

                                        </FormGroup>
                                        <button onClick={this.cadastrar} type="button" 
                                        className="btn btn-success"> 
                                        <i className="pi pi-save"></i>Salvar</button>
                                        <button onClick={this.cancelar} type="button" 
                                        className="btn btn-danger"> 
                                        <i className="pi pi-times"></i>Cancelar</button>
                                        
                                </div>
                            </div>
                    </div>
                </Card>
            
                

        )
    }
    
}
export default withRouter (CadastroUsuario)