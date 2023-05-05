// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  OnIncrement = () => {
    const {count} = this.state
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random(0, 100) * 100),
    }))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bgContainer">
        <h1 className="heading">Count {count}</h1>
        <p className="result">Count is {text}</p>
        <button className="button" type="button" onClick={this.OnIncrement}>
          Increment
        </button>
        <p className="para">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
