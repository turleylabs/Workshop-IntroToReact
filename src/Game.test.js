import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Game} from './Game'

// Test 6
xit('should display whose turn is next', () => {
    render(<Game />);
    
    expect(screen.getByLabelText("Game Status")).toHaveTextContent('Next player: X');
});

//Test 7
xit('should render the board to display squares', () => {
    render(<Game />);
    
    expect(screen.getByRole('button', {name: 'square 1'})).toBeInTheDocument();
});

//Test 8
xit('should rotate player turns when board square is clicked', () => {
    render(<Game />);

    playRound(1);

    expect(screen.getByLabelText("Game Status")).toHaveTextContent('Next player: O');
});

//Test 9
xit('should update board when square is clicked', () => {
    render(<Game />);

    playRound(1);

    expect(screen.getByRole('button', {name: "square 1"})).toHaveTextContent('X');
});

//Test 10
xit('should rotate player back to X when board square is clicked', () => {
    render(<Game />);

    playRound(1,2);

    expect(screen.getByRole('button', {name: "square 2"})).toHaveTextContent('O');
    expect(screen.getByLabelText("Game Status")).toHaveTextContent('Next player: X');
});

//Test 11
xit('should prevent multiple clicks to the same square', () => {
    render(<Game />);

    playRound(1,1);
    
    expect(screen.getByRole('button', {name: "square 1"})).toHaveTextContent('X');
    expect(screen.getByLabelText("Game Status")).toHaveTextContent('Next player: O');
});

//Test 12
xit('should show winner status and block future clicks', () => {
    render(<Game />);

    playRound(1,2,5,3,9);
    playRound(4);

    expect(screen.getByLabelText("Game Status")).toHaveTextContent('Winner: X');
    expect(screen.getByRole('button', {name: "square 4"})).toBeEmptyDOMElement();
});

function playRound(...moves) {
    for(const move of moves) {
        userEvent.click(screen.getByRole('button', {name: `square ${move}`}));
    }
}
