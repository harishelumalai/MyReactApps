import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import BirthdayReminder from './my_apps/birthday_reminder'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ReviewsViewer from './my_apps/reviews'

const my_apps = ['Birthday', 'Another App', 'Third App']

function HomePage() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/birthdayreminder' exact component={BirthdayReminder} />
        <Route path='/reviewsviewer' exact component={ReviewsViewer} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
