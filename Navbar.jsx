import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const count = useSelector(s => s.cart.items.reduce((sum, i) => sum + i.quantity, 0))
  return (
    <header>
      <nav className="container">
        <div>
          <Link to="/">Paradise Nursery</Link>
        </div>
        <div className="right">
          <Link to="/products">Produtos</Link>
          <Link to="/cart">Carrinho ({count})</Link>
        </div>
      </nav>
    </header>
  )
}
