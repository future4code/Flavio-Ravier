import React from 'react'
import {shallow} from 'enzyme'
import {PlannerPage} from './index'
import renderer from "react-test-renderer";
import {Post} from './../../containers/Post';
import {Planner} from './../../containers/Planner';

describe("Teste Planner Page", () => {
    test("Shallow PlannerPage - Post", () => {
        

        const component = shallow(<PlannerPage/>)
        const post = component.find(Post)
        
        expect(post).toBeDefined()
     })
     test("Shallow PlannerPage -  Planner", () => {
        

        const component = shallow(<PlannerPage/>)
        const planner = component.find(Planner)
        
        expect(planner).toBeDefined()
     })
     
})
