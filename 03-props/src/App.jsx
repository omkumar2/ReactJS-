import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="John Doe" age={18} img="https://i.pinimg.com/1200x/f3/17/1e/f3171e291c862bd7eed6a52386668494.jpg"/>
      <Card user="Jane Smith" age={25} img="https://i.pinimg.com/1200x/fd/90/44/fd904407294e0db2bfe74cd9da1b829a.jpg"/>
    </div>
  )
}

export default App
