import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {getAllByText} from "@testing-library/dom";

test('renders buy at target link', () => {
  const { getAllByText } = render(<App />);
  const linkElements = getAllByText(/blarrrrrrgh/i);
  linkElements.forEach(e => expect(e).toBeInTheDocument());
});
