import React from 'react';
import { render, screen } from '@testing-library/react';
import Comp from './index';

test('renders loading', () => {
    render(<Comp message='App is loading' />);
    expect(screen.getByText('App is loading')).toBeInTheDocument();
})
