import React, { useState } from 'react'
import './index.css'
import Birthday_list from './birthday.json'

const BirthdayCard = (birthday) => {
  return (
    <li key={birthday.name}>
      <div className='BirthdayCard'>
        <img className='profilepic' src={birthday.imgurl} alt={birthday.name} />
        <ul className='Content'>
          <li>
            <h3 className='BirthdayName'>{birthday.name}</h3>
          </li>
          <li>
            <h5 className='BirthdayAge'>{birthday.age} years</h5>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default function BirthdayReminder() {
  const [bdaylist, setBday] = useState(Birthday_list)
  const clearBday = () => {
    setBday([])
  }
  return (
    <div className='main'>
      <div className='BirthdayApp'>
        <h2 className='Summary'>
          {bdaylist.length} birthday{bdaylist.length > 1 ? 's' : ''} today
        </h2>
        <ul className='BirthdayList'>{bdaylist.map(BirthdayCard)}</ul>
        <div className='clearButton' onClick={clearBday}>
          Clear All
        </div>
      </div>
    </div>
  )
}
