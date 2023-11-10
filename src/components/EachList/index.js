import {Component} from 'react'
import './index.css'

class EachList extends Component {
  state = {count: 0, isShow: true}

  onIncrement = () => {
    const {isShow} = this.state
    this.setState(prevState => ({count: prevState.count + 1, isShow: !isShow}))
  }

  onDecrement = () => {
    const {isShow} = this.state

    this.setState(prevState => ({count: prevState.count - 1, isShow: !isShow}))
  }

  render() {
    const {count, isShow} = this.state
    console.log(count)
    const {eachItemList} = this.props
    const {name, products} = eachItemList

    return (
      <li className="liContainer">
        <div>
          <button type="button" className="buttonName">
            {name}
          </button>
          <p>Cart {count}</p>
        </div>
        <div>
          <ul className="conatiner">
            {products.map(each2 => (
              <li key={each2.id} className="licon">
                <img src={each2.image} alt={each2.name} className="imager1" />
                {isShow ? (
                  <button
                    type="button"
                    className="button1"
                    onClick={this.onIncrement}
                  >
                    +
                  </button>
                ) : (
                  <button
                    type="button"
                    className="button1"
                    onClick={this.onDecrement}
                  >
                    -
                  </button>
                )}
                <p>{each2.name}</p>
                <p>{each2.price}</p>
                <p>{each2.weight}</p>
              </li>
            ))}
          </ul>
        </div>
      </li>
    )
  }
}
export default EachList
