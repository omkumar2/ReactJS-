import React from 'react'
import Card from './components/card'
import Navbar from './components/Navbar'

const App = () => {
  // const age = 25;  this is use as js expression  , for using this is write as       {age} in jsx
  // {Card()} and <Card /> this is use for function call in jsx 

  return (
    <div>
      <Navbar />
      <Card />
      <Card />
    </div>
  )
}

export default App
