import ApiService from '../apiservice'
import ErroValidacao from '../exception/ErroValidacao'



export default class LancamentoService extends ApiService {
    constructor(){
        super('/api/lancamentos')
    }
    obterListaMeses(){
        return [
            { label: 'Selecione...', value: '' },
            { label: 'Janeiro', value: 1 },
            { label: 'Fevereiro', value: 2 },
            { label: 'Março', value: 3 },
            { label: 'Abril', value: 4 },
            { label: 'Maio', value: 5 },
            { label: 'Junho', value: 6 },
            { label: 'Julho', value: 7 },
            { label: 'Agosto', value: 8 },
            { label: 'Setembro', value: 9 },
            { label: 'Outubro', value: 10 },
            { label: 'Novembro', value: 11 },
            { label: 'Dezembro', value: 12 },
        ]
    }
     obterListaTipos(){
        return [
            { label: 'Selecione...', value: '' },
            { label: 'Despesa', value: 'DESPESA' },
            { label: 'Receita', value: 'RECEITA' },
        ]
     }

     obterPorId(id){
        return this.get(`/${id}`);
     }

     validar(Lancamento){
        const erros = [];

        if(!lancamento.ano){
            erros.push("Informe o ano do lançamento")
        }

        if(!lancamento.mes){
            erros.push("Informe o mes do lançamento")
        }
        if(!lancamento.descricao){
            erros.push("Informe a descrição do lançamento")
        }
        if(!lancamento.valor){
            erros.push("Informe o valor do lançamento")
        }
        if(!lancamento.tipo){
            erros.push("Informe o tipo do lançamento")
        }
        

        if(erros && erros.length > 0){
            throw new ErroValidacao(erros);
        }
     }

     salvar(Lancamento){
        return this.post('/', lancamento);
     }

     alterarStatus(id, status){
        return this.put(`/${id}/atualizar-status` , { status })

     }


     atualizar(Lancamento){
        return this.put(`/${lancamento.id}`, lancamento);
     }

    consultar(lancamentoFiltro){
        let params = `?ano=${lancamentoFiltro.ano}`

        if(lancamentoFiltro.mes){
            params = `${params}&mes=${lancamentoFiltro.mes}`
        }

        if(lancamentoFiltro.tipo){
            params = `${params}&tipo=${lancamentoFiltro.tipo}`
        }

        if(lancamentoFiltro.status){
            params = `${params}&status=${lancamentoFiltro.status}`
        }

        if(lancamentoFiltro.usuario){
            params = `${params}&usuario=${lancamentoFiltro.usuario}`

        }

        if(lancamentoFiltro.descricao){
            params = `${params}&descricao=${lancamentoFiltro.descricao}`

        }

        
        return this.get(params);
    }

    deletar(){
        return this.delete(`/${id}`);
    }
}

