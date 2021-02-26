import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Board} from './Board'

// Test 4
xit('should render square data', () => {
    const squares = [
        'X', 'X', 'X', 
        null, null, null, 
        null, null, null, 
    ];
    render(<Board squares={squares} />);

    const expectedSquares = [
        'X', 'X', 'X', 
        '', '', '', 
        '', '', '',
    ];
    const squareText = screen.getAllByRole('button').map(square => square.textContent);
    expect(squareText).toEqual(expectedSquares); 
});

// Test 5
xit('should pass the clicked square index when clicked', () => {
    let clickedSquare = null;
    const onClick = i => clickedSquare = i;

    render(<Board onClick={i => onClick(i)} squares={Array(9).fill(null)} />);
    userEvent.click(screen.getByRole('button', {name: "square 3"}));

    expect(clickedSquare).toEqual(2); 
});
