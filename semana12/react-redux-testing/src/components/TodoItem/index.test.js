import React from 'react'
import {shallow} from 'enzyme'
import {DeleteButton, TodoItem, TodoListItem} from './index'
import renderer from "react-test-renderer";

describe('Testa componente TodoItem', () => {
	test('Deve chamar a funcao onDeleteTodo quando clicar no botao', () => {
		// Preparacao
		const onDeleteTodoMock = jest.fn()
		const component = shallow(<TodoItem onCompleteTodo={jest.fn()} onDeleteTodo={onDeleteTodoMock} todo={{}}/>)

		const deleteButton = component.find(DeleteButton)

		// Execucao
		deleteButton.simulate('click')

		// Verficacao
		expect(onDeleteTodoMock).toHaveBeenCalledTimes(1)
	})

	test('Deve passar props corretamente para um TodoListItem', () => {
		// Preparacao
		const mockTodo = {
			id: '1',
			text: 'bla',
			completed: true
		}

		// Execucacao
		const component = shallow(<TodoItem onCompleteTodo={jest.fn()} onDeleteTodo={jest.fn()} todo={mockTodo}/>)

		// Verificacao
		const todoListItem = component.find(TodoListItem)

		expect(todoListItem.props().completed).toBe(true)
		expect(todoListItem.props().children).toBe('bla')
	})

	test('Snapshot', () => {
		const tree = renderer.create(<TodoItem todo={{}}/>).toJSON();
		expect(tree).toMatchSnapshot();
	})
})
