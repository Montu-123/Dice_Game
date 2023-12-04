import React from 'react';

export default function Rolldice({ currentDice, rolldice, resetScore, showRules, setShowRules }) {



    return (
        <div className='rolldice'>
            <img onClick={rolldice} src={`/images/dice_${currentDice}.png`} alt='diceimg'></img>
            <h1>Click on Dice to Roll !!!</h1>
            <button onClick={resetScore}>Reset Score</button> <br></br>
            <button onClick={() => setShowRules((prev) => !prev)}>
                {showRules ? "Hide" : "Show"}Rules
            </button>
        </div>
    )
}
