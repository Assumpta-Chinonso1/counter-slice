import React, { Component } from 'react'
import Counter from './counter'

export class App extends Component {
  render() {
    return (
      <div className='min-h-screen flex items-center justify-center bg-blue-100'>
        
        <Counter/>

      </div>
    )
  }
}

export default App