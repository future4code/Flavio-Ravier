import { Usuario } from "./Usuario";
import { GerenciadorArquivo } from './GerenciadorArquivo';

export class Prof implements Usuario {
    public gerenciadorArquivo: GerenciadorArquivo
    constructor(public nome: string, public email: string, public nascimento: string, public especialidade: string){
        this.gerenciadorArquivo = new GerenciadorArquivo('dados.json') 
    }
    criarUsuario(data:any){
        const bancoDados = this.gerenciadorArquivo.readFile()
        const prof = {
            nome: data.nome,
            email: data.email,
            nascimento: data.nascimento,
            especialidade: data.especialidade 
        }
        bancoDados.professores.push(prof)
        this.gerenciadorArquivo.writeFile(bancoDados)
    }
}