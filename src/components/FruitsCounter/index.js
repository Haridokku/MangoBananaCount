// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}
  onMangoEaten = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }
  onBananaEaten = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }
  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="container">
        <div className="fruitContainer">
          <h1 className="heading">
            Bob ate <span className="count">{mangoCount}</span> mangoes{' '}
            <span className="count">{bananaCount}</span> bananas
          </h1>
          <div className="imgContainers">
            <div className="img1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onMangoEaten}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="img1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onBananaEaten}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
