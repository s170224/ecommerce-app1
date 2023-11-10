import {Component} from 'react'

import EachList from '../EachList'

import './index.css'

class Counter extends Component {
  state = {list1: [], title: ''}

  componentDidMount() {
    this.getEcommerceList()
  }

  getEcommerceList = async () => {
    const url = 'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d'

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    this.setState({
      list1: data.categories,
      title: data.title,
    })
  }

  render() {
    const {list1, title} = this.state
    console.log(list1)
    console.log(title)

    return (
      <div className="mainCon1">
        <div className="headCon">
          <h1>{title}</h1>
        </div>
        <ul>
          {list1.map(eachItem => (
            <EachList eachItemList={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Counter
