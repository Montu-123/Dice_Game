// import { Container } from '@mui/material';
import React from 'react';
// import { Box } from '@mui/material';
import styled from 'styled-components'


function NumberSelector({error, seterror, selectednumber, setSelectedNumber}) {

    const numberselectorhandler = (value) =>{
        setSelectedNumber(value);
        seterror();
    }
    const arrNumber = [1, 2, 3, 4, 5, 6]

    console.log(selectednumber)
    return (
        <Container >
            <p1>{error}</p1>
            <div className='flex'>
                {arrNumber.map((value, i) => (
                    <Box isselected={value === selectednumber} className='numbbox' key={i} onClick={() => numberselectorhandler(value)}>{value}</Box>
                ))}
            </div>
            <p>Select Number</p>
        </Container>
    )
};

export default NumberSelector;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display:flex;
    gap:24px;
}
p{
    font-size: 24px;
}

p1{
    font-size: 24px;
    color: red;
    margin-bottom: 4px
}
`

const Box = styled.div`
font-size: 20px;
font-weight: 700;
border: 2px solid black;
height: 60px;
width: 60px;
display: grid;
place-items: center;
cursor: pointer;
background-color: ${(props) => (props.isselected ? "black" : "white")};
Color: ${(props) => (props.isselected ? "white" : "black")};
`;