import { Usuario } from "./Usuario";
import { GerenciadorArquivo } from './GerenciadorArquivo';

export class Aluno implements Usuario {
    public gerenciadorArquivo: GerenciadorArquivo
    constructor(public nome: string, public email: string, public nascimento: string, public alunoTurma: string){
        this.gerenciadorArquivo = new GerenciadorArquivo('dados.json') 
    }
    criarUsuario(data:any){
        const bancoDados = this.gerenciadorArquivo.readFile()
        const aluno = {
            nome: data.nome,
            email: data.email,
            nascimento: data.nascimento,
            turma: data.alunoTurma 
        }
        bancoDados.alunos.push(aluno)
        //this.gerenciadorArquivo.writeFile(bancoDados)
        const index = bancoDados.turmas.findIndex((turma:any) => turma.patrono === aluno.turma)
        if ((index+1)) {
            bancoDados.turmas[index].listaAluno.push(aluno)
            this.gerenciadorArquivo.writeFile(bancoDados)
        } else {
            console.log("Não foi possível registrar o aluno, pois não existe tal turma/patrono para aloca-lo")
        }
    }
}

