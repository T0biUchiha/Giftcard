import React from 'react';
import CardCode from './CardCode';


const Card = (props) => {
  return (
    <div className='Container'>
        {props.card.map((card) => {
          return <CardCode key={card.id} card={card} />
        })}
    </div>
  )
}

export default Card