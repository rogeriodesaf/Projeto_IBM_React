import ProductCard from './ProductCard'
import { PLANTS, SECTIONS } from '../data'

export default function ProductList() {
  return (
    <div className="container">
      {SECTIONS.map(sec => (
        <section key={sec.id} style={{marginBottom: '1.5rem'}}>
          <h2>{sec.title}</h2>
          <div className="grid">
            {PLANTS.filter(p => p.section === sec.id).map(p => (
              <ProductCard key={p.id} plant={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
