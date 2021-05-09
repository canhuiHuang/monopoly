import React from 'react';

function VictoryScreen({winner}) {
    return (
        <div className="victoryScreen">
            <h1>{winner} is victorious!</h1>
        </div>
    )
}

export default VictoryScreen;
