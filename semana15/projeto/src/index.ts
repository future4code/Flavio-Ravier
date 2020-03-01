import { WebMissao } from "./WebMissao";
import { Prof } from "./Prof";
import { Aluno } from "./Aluno";
import { MobileMissao } from "./MobileMissao";

const bouman = new WebMissao("01/01/2020","01/07/2020","Bouman");
const newton = new WebMissao("01/01/2020","01/07/2020","Newton");
const sangan = new WebMissao("01/01/2020","01/07/2020","Sangan");
const mobile1 = new MobileMissao("01/01/2020","01/07/2020","Mobile1");
const darvas = new Prof("darvas","darvas@darvas","01/01/1990","Back")
const ravi = new Aluno("rav", "rav@ravi","01/01/1990","Bouman")
const teet = new Aluno("teet", "teet@teet","01/01/1990","Newton")
const lucy = new Aluno("lucy", "teet@teet","01/01/1990","Newton")

sangan.criarTurma(sangan)
newton.criarTurma(newton)
bouman.criarTurma(bouman)
mobile1.criarTurma(mobile1)

ravi.criarUsuario(ravi) 
teet.criarUsuario(teet) 
darvas.criarUsuario(darvas) 
lucy.criarUsuario(lucy)