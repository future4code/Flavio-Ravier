import { Missao } from "./Missao";
import { GerenciadorArquivo } from './GerenciadorArquivo';

export class WebMissao extends Missao {
    public gerenciadorArquivo: GerenciadorArquivo
    constructor(inicio: string, termino: string, public patrono: string ){
        super(inicio,termino)
        this.gerenciadorArquivo = new GerenciadorArquivo('dados.json')
    }
    public criarTurma(data:any){
        const bancoDados = this.gerenciadorArquivo.readFile()
        const indexTurma = bancoDados.turmas.findIndex((turma:any) => turma.patrono === data.patrono)
        if (!(indexTurma+1)) {
            const turma = {
                inicio: data.inicio,
                termino: data.termino,
                patrono: data.patrono,
                listaAluno: [],
                listaProf: [],
            }
            bancoDados.turmas.push(turma)
            this.gerenciadorArquivo.writeFile(bancoDados)
        } else {
            console.log("Já existe turma com este patrono, favor escolher outro.")
        }
    }
  }
  