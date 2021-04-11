import logo from './logo.svg'
import React from 'react'
import './App.css'
import './my_apps/birthday_reminder'
import my_apps from './my_apps.json'
import { Link } from 'react-router-dom'

/*
const my_apps = [
  { name: 'Birthday Reminder', url: '/birthdayreminder' },
  { name: 'Another App', url: '/anotherapp' },
  { name: 'Third App', url: '/thirdapp' },
]
*/

const AppCard = (appname) => {
  return (
    <Link to={appname.url} key={appname.name}>
      <li className='appcard'>{appname.name}</li>
    </Link>
  )
}

function App() {
  //Need to Add Loading Screen while fetching the list of apps from the my_apps directory
  return (
    <div className='App'>
      <h1>My React Apps</h1>
      <ul className='applist'>{my_apps.map(AppCard)}</ul>
    </div>
  )
}

export default App
