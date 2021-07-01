import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

//Testing APP Render without crashing
it('App component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
});