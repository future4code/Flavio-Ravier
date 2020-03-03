import {createTodoAction, deleteTodoAction} from '../actions/todos'
import todos from './todos'

describe('Testa o todo reducer', () => {
	test('Testa se create todos cria um todo', () => {
		// Preparacao
		const currentState = {
			allTodos: []
		}

		const action = createTodoAction('Todo teste')

		// Execucao
		const newState = todos(currentState, action)

		// Verificação
		expect(newState.allTodos).toHaveLength(1)
		expect(newState.allTodos[0].text).toEqual('Todo teste')
	})

	test('Testa se delete todos deleta um todo', () => {
		// Preparacao
		const currentState = {
			allTodos: [{
				id: 'bananinha',
				text: 'Todo teste',
				completed: false
			}]
		}

		const action = deleteTodoAction('bananinha')

		// Execucao
		const newState = todos(currentState, action)

		// Verificação
		expect(newState.allTodos).toHaveLength(0)
	})
})