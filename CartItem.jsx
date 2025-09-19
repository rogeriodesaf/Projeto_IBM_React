import { useDispatch } from 'react-redux'
import { changeQty, removeItem } from '../redux/cartSlice'

export default function CartItem({ item }) {
  const dispatch = useDispatch()
  return (
    <tr>
      <td style={{width: 64}}>
        <img src={item.image} alt={item.name} style={{width: 48, height: 48, objectFit:'cover', borderRadius: 8}}/>
      </td>
      <td>{item.name}</td>
      <td>R$ {item.price.toFixed(2)}</td>
      <td>
        <div className="qty">
          <button onClick={() => dispatch(changeQty({ id: item.id, delta: -1 }))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(changeQty({ id: item.id, delta: +1 }))}>+</button>
        </div>
      </td>
      <td>R$ {(item.price * item.quantity).toFixed(2)}</td>
      <td><button className="btn secondary" onClick={() => dispatch(removeItem(item.id))}>Excluir</button></td>
    </tr>
  )
}
