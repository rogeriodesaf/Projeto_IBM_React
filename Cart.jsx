import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { clearCart } from '../redux/cartSlice'
import { Link } from 'react-router-dom'

export default function Cart() {
  const items = useSelector(s => s.cart.items)
  const dispatch = useDispatch()
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  if (items.length === 0) {
    return (
      <div className="container">
        <h2>Seu carrinho está vazio</h2>
        <Link to="/products"><button className="btn">Continuar comprando</button></Link>
      </div>
    )
  }

  return (
    <div className="container">
      <h2>Seu carrinho</h2>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Produto</th>
            <th>Preço</th>
            <th>Qtd</th>
            <th>Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {items.map(i => <CartItem key={i.id} item={i} />)}
        </tbody>
      </table>

      <div className="totals"><strong>Total: R$ {total.toFixed(2)}</strong></div>

      <div style={{display:'flex', gap:'1rem', marginTop:'1rem'}}>
        <Link to="/products"><button className="btn secondary">Continuar comprando</button></Link>
        <button className="btn" onClick={() => dispatch(clearCart())}>Finalizar compra</button>
      </div>
    </div>
  )
}
