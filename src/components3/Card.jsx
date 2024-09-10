import React from 'react'
import './style.css';

export default function Card(props) {
  return (
    <div className='card' >
       <h3>{props.value}</h3>
    </div>
  )
}


