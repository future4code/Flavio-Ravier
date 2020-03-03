import {completeTodoAction, createTodoAction} from './todos'

describe('Testa actions de Todo', () => {
	test('Testa create todo action', () => {
		// Preparacao
		const textoDeTeste = 'todo de teste'

		// Execucao
		const action = createTodoAction(textoDeTeste)

		// Verificação
		expect(action.type).toEqual('CREATE_TODO')
		expect(action.payload).toEqual({text: 'todo de teste'})
	})

	test('Testa complete todo action', () => {
		// Preparacao
		const idTeste = '1'

		// Execucao
		const action = completeTodoAction(idTeste)

		// Verificação
		const expectedAction = {
			type: 'COMPLETE_TODO',
			payload: {
				todoId: idTeste
			}
		}

		expect(action).toEqual(expectedAction)
	})
})