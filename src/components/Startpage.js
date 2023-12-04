import React from 'react';
import style from './Startpage.module.css'

export default function Startpage({ toggle }) {
    return (
        <div className='startpage'>
            <div className={style.container}>
                <img className='startpageimg' src='/images/dices 1.png' alt='diceimg'></img>
                <div>
                    <h1>DICE GAME</h1>
                <button onClick={toggle}> Play Now</button>
                </div>
            </div>
        </div>
    )
}

