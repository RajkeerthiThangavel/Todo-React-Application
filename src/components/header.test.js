import {render, screen} from '@testing-library/react'
import Header from "./header"

// Check Header Text
describe('Header component', () => {
    test('renders "Todo Application" as a Header', () => {
      render(<Header />);
      const headerElementText = screen.getByText('Todo Application');
      expect(headerElementText).toBeInTheDocument();
    });

});