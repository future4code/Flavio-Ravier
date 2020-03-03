import { Missao } from "./Missao";
import { GerenciadorArquivo } from './GerenciadorArquivo';

export class MobileMissao extends Missao {
    public gerenciadorArquivo: GerenciadorArquivo
    constructor(inicio: string, termino: string, public turma: string ){
        super(inicio,termino)
        this.gerenciadorArquivo = new GerenciadorArquivo('dados.json')
    }
    public criarTurma(data:any){
        const bancoDados = this.gerenciadorArquivo.readFile()
        const index = bancoDados.turmas.findIndex((turma:any) => turma.turma === data.turma)
        if (!(index+1)) {
            const turma = {
                inicio: data.inicio,
                termino: data.termino,
                turma: data.turma,
                listaAluno: [],
                listaProf: [],
            }
            bancoDados.turmas.push(turma)
            this.gerenciadorArquivo.writeFile(bancoDados)
        }
        else {
            console.log("Já existe turma com este nome, favor escolher outro.")
        }
    }
  }
