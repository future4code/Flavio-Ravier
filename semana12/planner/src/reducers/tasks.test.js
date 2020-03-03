import { setTasks, changeLoadingStatus } from '../actions/task'
import { tasks } from './tasks'

describe('reducer tasks tests', () => {
    test('test set task', () => {
        
        // Preparação
        const currentState = {
            mon: [],
            tue: [],
            wed: [],
            thu: [],
            fri: [],
            sat: [],
            sun: [],
            isLoading: false
        }
        
        const action = setTasks(['Teste Mon'],['Teste Tue'],['Teste Wed'],['Teste Thu'],['Teste Fri'],['Teste Sat'],['Teste Sun'])

        // Execução
        const newState = tasks(currentState, action)

        // Verificação

        expect(newState.mon).toHaveLength(1)
        expect(newState.tue).toHaveLength(1)
        expect(newState.wed).toHaveLength(1)
        expect(newState.thu).toHaveLength(1)
        expect(newState.fri).toHaveLength(1)
        expect(newState.sat).toHaveLength(1)
        expect(newState.sun).toHaveLength(1)

    })
    test('test change loading status', () => {
        
        // Preparação
        const currentState = {
            mon: [],
            tue: [],
            wed: [],
            thu: [],
            fri: [],
            sat: [],
            sun: [],
            isLoading: false
        }
        
        const action = changeLoadingStatus()

        // Execução
        const newState = tasks(currentState, action)

        // Verificação

        expect(newState.isLoading).toEqual(!false)
        

    })
})