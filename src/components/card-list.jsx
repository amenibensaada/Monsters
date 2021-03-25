import React from 'react';

import {Card} from './card.jsx'
import './card-list.css'
export const Cardlist = props => 
( <div className='card-list'> 
    { props.monsters.map(monster =>(
         <Card key={monster.id} monster = {monster} />
      ))}  </div>
);