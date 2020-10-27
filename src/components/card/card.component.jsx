import React from 'react';

import './card.style.css';

export const Card = (props) => (
    <div className='card-container'>
<img alt='monster' src={`https://robohash.org/${props.value_object.id}?set=set2&size=200x200`} />
        <h2> {props.value_object.name} </h2>
        <p> {props.value_object.email} </p>
    </div>
)