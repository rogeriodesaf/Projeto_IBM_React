import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice'

export default function ProductCard({ plant }) {
  const dispatch = useDispatch()
  return (
    <div className="card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p className="muted">{plant.description}</p>
      <div className="price">R$ {plant.price.toFixed(2)}</div>
      <button className="btn" onClick={() => dispatch(addItem(plant))}>
        Adicionar ao carrinho
      </button>
    </div>
  )
}
