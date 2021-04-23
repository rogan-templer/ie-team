import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Quiz from './Quiz'

function App() {
  return (
    <>
      <Route path='/' component={Header} />
      <Route exact path='/' component={Home} />
      <Route exact path='/quiz/:id' component={Quiz} />
      <Route path='/' component={Footer} />
    </>
  )
}

export default App
