import React from 'react';
import './card.styles.css';
const imgUrlHost = 'https://robohash.org/';
const imgUrlParams = '?set=set4';

export const Card = (props) => (
    <div className='card-container'>
    <img alt="monster" src={imgUrlHost+''+props.monster.id+''+imgUrlParams}/>
    <h2>{ props.monster.email }</h2>
    </div>
)