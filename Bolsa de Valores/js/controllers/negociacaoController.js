import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController{
    #campoData;
    #campoQuantidade;
    #campoValor;

    constructor(){
        this.#campoData = document.getElementById('data');
        this.#campoQuantidade = document.getElementById('quantidade');
        this.#campoValor = document.getElementById('valor');
    }

    criarNegociacao(){
        let data = new Date(this.#campoData.value);
        let quantidade = this.#campoQuantidade.value;
        let valor = this.#campoValor.value;
        
    }
}