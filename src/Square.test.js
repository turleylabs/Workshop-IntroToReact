import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Square} from './Square'

// TEST 1
it('should display value', () => {
    render(<Square value={"X"} />);
 
    expect(screen.getByText('X')).toBeInTheDocument();
});

// TEST 2
xit('should display value and square name', () => {
    render(<Square name={"my square"} value={"Y"} />);
 
    expect(screen.getByRole('button', {name: "my square"})).toHaveTextContent('Y');
});

// TEST 3
xit('clicking a square should trigger onClick from props', () => {
    let clicked = null;
    const onClick = () => {clicked = true;}; 
    render(<Square name={"square 1"} onClick={() => onClick()} />);

    userEvent.click(screen.getByRole('button', {name: "square 1"}));

    expect(clicked).toBeTruthy();
});