import React from 'react';
import { shallow } from "enzyme";
import Todo from "./todo";

// Unit Test Todo component
describe('Todo', () => {
    //Render Todo Component
    it('should render Todo component correctly', () => {
        const component = shallow(<Todo />);
        expect(component.exists()).toBe(true);
    });
    //Render Todo Component with no props
    it('should render correctly with no props', () => {
        const component = shallow(<Todo />);
        expect(component).toMatchSnapshot();
    });
});
