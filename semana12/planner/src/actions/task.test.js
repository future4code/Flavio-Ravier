import {changeLoadingStatus,setTasks, getAllTasks} from './task'
import axios from 'axios'

describe('Testa actions de Task', () => {
	test('Testa setTasks', () => {
		// Preparacao
        const testArr = {
            mon:"Teste"    
        }

		// Execucao
		const action = setTasks(testArr)

		// Verificação
		expect(action.type).toEqual('SET_TASKS')
		expect(action.payload.mon).toEqual({mon: 'Teste'})
    })
    test('Test changeLoading', () => {
		
		// Execucao
		const action = changeLoadingStatus()

		// Verificação
		const expectedAction = {
			type: 'CHANGE_LOADING_STATUS',
		}

		expect(action).toEqual(expectedAction)
	})
	test("Deve retornar uma lista de posts", async () =>{
		//Mock axios
		axios.get =jest.fn(async () => ({
			data: [
				{id:1, text:"Lavar algo", day:"Monday"}
				]	
			}));

		axios.get =jest.fn(async () => ({
			data: [
				{id:1, text:"Lavar algo", day:"Monday"}
				]	
			}));
		// Mock Dispatch
		const dispatch = jest.fn();

		//Executa a ação assíncrona
		await getAllTasks()(dispatch);

		//Verifica se o dispatch foi chamado as 3 vezes, para o loading, para o setTasks e para o loading.
		//o fato de eu ter 3 dispatchs, me dificultou pra ver o que tinha dentro, meu expect esperava sempre
		// por 3 objetos.
		expect(dispatch).toHaveBeenCalledTimes(3)
	})
})
