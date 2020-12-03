import React from 'react';
import { render, screen } from '@testing-library/react';
import Comp from './index';

test('renders App is loading', () => {
    render(<Comp />);
    expect(screen.getByText(/App is loading/i)).toBeInTheDocument();
});
