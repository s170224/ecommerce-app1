import './index.css'

const EachItemCount = props => {
  const {eachValCoun, onDecrement, onIncrement, isShow} = props
  const {id, name, price, weight, image} = eachValCoun

  const onIncFunc = () => {
    onIncrement(id)
  }
  const onDecFunc = () => {
    onDecrement(id)
  }

  return (
    <li className="licon">
      <img src={image} alt={name} className="imager1" />
      {isShow ? (
        <button type="button" className="button1" onClick={onIncFunc}>
          +
        </button>
      ) : (
        <button type="button" className="button1" onClick={onDecFunc}>
          -
        </button>
      )}
      <p>{name}</p>
      <p>{price}</p>
      <p>{weight}</p>
    </li>
  )
}
export default EachItemCount
