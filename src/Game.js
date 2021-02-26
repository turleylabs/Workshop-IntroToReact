import React from 'react';
import {Board} from './Board'
import {calculateWinner} from './calculateWinner'

export class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    status() {
    }

    onClick(i) {
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    {/* Board */}
                </div>
                <div className="game-info">
                    <div aria-label="Game Status">{/* status */}</div>
                </div>
            </div>
        );
    }
}
