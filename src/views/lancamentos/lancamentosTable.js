import React from "react";
import currencyFormatter from 'currency-formatter'


export default props =>{

    const rows = props.lancamentos.map( Lancamento => {
        return (
            <tr key={lancamento.id}>
                <td>{lancamento.descricao}</td>
                <td>{ currencyFormatter.format(lancamento.valor, {locale: 'pt-BR'}) }</td>
                <td>{lancamento.tipo}</td>
                <td>{lancamento.mes}</td>
                <td>{lancamento.status}</td>
                <td>

                    <button 
                    className="btn btn-sucess" title="Efetivado"
                    disabled={lancamento.status !== 'PENDENTE'}
                    onClick={e => props.alterarStatus(lancamento, 'Efetivado')}
                    type="button">
                    <i className="pi pi-check"></i>
                    </button>

                    <button 
                    className="btn btn-warning" title="Cancelado"
                    disabled={lancamento.status !== 'PENDENTE'}
                    onClick={e => props.alterarStatus(lancamento, 'Cancelado')}
                    type="button">
                    <i className="pi pi-times"></i>
                    </button>

                    <button 
                    type="button" 
                    className="btn btn-primary" title="Editar"
                    onClick={e => props.editAction(lancamento.id)}>
                    <i className="pi pi-pencil"></i></button>
                    <button 
                    type="button" 
                    className="btn btn-danger" title="Deletar"
                    onClick={e => props.deleteAction(lancamento)} >
                    <i className="pi pi-trash"></i></button>

                </td>
            </tr>
        )
    })


    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Descrição</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Mês</th>
                    <th scope="col">Situação</th>
                    <th scope="col">Açoes</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}