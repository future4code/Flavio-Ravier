import React from 'react'
import {Todos} from './index'
import {shallow} from 'enzyme'
import {TodoItem} from '../../components/TodoItem'

describe('Testa TodosContainer', () => {
	test('Testa se componentes TodoItem são renderizados', () => {
		const todosMock = [
			{id: '1', text: 'bla', completed: false},
			{id: '2', text: 'ble', completed: true},
		]
		const component = shallow(<Todos allTodos={todosMock} />)

		const todoItems = component.find(TodoItem)

		expect(todoItems).toHaveLength(2)
	})
})