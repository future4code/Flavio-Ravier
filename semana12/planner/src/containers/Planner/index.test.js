import React from "react";
import {TaskCard} from "./../../components/TaskCard";
import {Planner} from './index';
import {shallow} from 'enzyme';
import renderer from "react-test-renderer";



describe("Test Planner", () => {
    test("Swallow Planner", () => {
        const listMockMon = [
            {id:1, text:"Bal", day:"monday"},
            {id:2, text:"B2al", day:"monday"}
        ]

        const listMockFri = [
            {id:1, text:"Bal", day:"friday"},
            {id:2, text:"B2wqal", day:"friday"},
            {id:3, text:"B2dqdwqal", day:"friday"}
        ] 
             
        

        const component = shallow(<Planner getTaskList={jest.fn} listOfMon={listMockMon} listOfFri={listMockFri} 
            listOfTue={[]} listOfWed={[]} listOfThu={[]}
            listOfSat={[]} listOfSun={[]}/>)
        
        const taskCards = component.find(TaskCard)
        
        //ele le que existem 5 taskcards
        expect(taskCards).toHaveLength(5)
     })
     
    

    test('Snapshot', () => {
        const tree = renderer.create(<Planner getTaskList={jest.fn} listOfMon={[]} listOfFri={[]} 
            listOfTue={[]} listOfWed={[]} listOfThu={[]} listOfThu={[]} 
            listOfSat={[]} listOfSun={[]}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
}) 
