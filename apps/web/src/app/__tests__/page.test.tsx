import { screen } from '@testing-library/react';
import React from 'react';

import { render } from '../../utils';
import Home from '../page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /rooms/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders homepage unchanged', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
