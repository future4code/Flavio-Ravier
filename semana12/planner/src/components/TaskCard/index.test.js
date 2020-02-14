import React from 'react'
import {TaskCard} from './index'
import renderer from "react-test-renderer";

test('Snapshot', () => {
    const tree = renderer.create(<TaskCard />).toJSON();
    expect(tree).toMatchSnapshot();
})