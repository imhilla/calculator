import React from 'react'
import ReactDOM from 'react-dom'
import { Display } from './Display'
import { ButtonPanel } from './ButtonPanel'

const App = () => {
  return (
    <div className="container">
      <Display />
      <ButtonPanel />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App