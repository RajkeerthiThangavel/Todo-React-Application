import React from 'react';
import { shallow } from "enzyme";
import TodoList from "./todoList";

// Unit Test Todo component
describe('TodoList', () => {
    //Render Todo Component
    it('should render TodoList component correctly', () => {
        const component = shallow(<TodoList />);
        expect(component.exists()).toBe(true);
    });
    //Render Todo Component with no props
    it('should render correctly with no props', () => {
        const component = shallow(<TodoList />);
        expect(component).toMatchSnapshot();
    });
});
