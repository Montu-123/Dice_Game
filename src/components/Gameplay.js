import React, { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import Rolldice from './Rolldice';
import Rules from './Rules';
// import styled from 'styled-components'


export default function Gameplay() {
    const [selectednumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState();
    const [showRules, setShowRules] = useState(false);

    
    const generateRandomNumber =  (min, max) => {
        console.log(Math.floor( Math.random() * (max - min )+ min));
        return Math.floor( Math.random() * (max - min )+ min)
    };

    const rolldice = () =>{
        if (!selectednumber) {
            setError("Please selsect a number first")
            return
        }

        setError("")

        const randomnumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomnumber);


        if(selectednumber === randomnumber){
            setScore((prev => prev + randomnumber))
        }
        else{
            setScore((prev => prev - 2))
        }
        setSelectedNumber(undefined);

    }

    const resetScore = ()=>{
        setScore(0);
    }


    return (
        <>
            <maincontainer>
                <div className='topsection'>
                    <TotalScore score={score}/>
                    <NumberSelector error={error} seterror={setError} selectednumber={selectednumber} setSelectedNumber={setSelectedNumber}/>
                </div>
                    <Rolldice currentDice={currentDice} rolldice={rolldice} resetScore={resetScore} showRules={showRules} setShowRules={setShowRules}/>
                    
                    {showRules && <Rules/>}
            </maincontainer>
        </>
    )
};

// const maincontainer = styled.div`
// padding-top: 70px; 
// .topsection {
//     display: flex;
//     justify-content: space-around;
// }
// `;