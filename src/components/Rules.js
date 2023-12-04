import React from 'react';
import styled from 'styled-components';

export default function Rules() {
  return (
    <MainContainer> 
        <h2>How to play Dice Game ?</h2>
        <div className='text'>
        <p> Select an number</p>
        <p>Click on dice image</p>
        <p>After click on dice if selected number is equal to dice number you will get same point as dice{" "}</p>
        <p>If you get wrong guess then 2 point will be deducted</p>
        </div>
    </MainContainer>
  )
}

const MainContainer = styled.div`
background-color: #FBF1F1;
max-width: 700px;
padding: 20px;
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
flex-wrap: wrap;
margin-left: 321px;
margin-top: 21px;
border-radius: 10px;
.text{
    font-size: 20px;
    font-weight: 500;
}
`