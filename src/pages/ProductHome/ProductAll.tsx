import { TProduct } from '@/interfaces/TProduct'
import { Link } from 'react-router-dom'

type Props = {
  products: TProduct[]
}

const ProductAll = ({ products }: Props) => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <h1>Các Sản Phẩm Của Chúng Tôi</h1>
      </div>
      <div className='row mb-8'>
        {products.map((product) => (
          <div key={product.id} className='col-md-3'>
            <Link to={`/shop/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <img width={300} src={product.thumbnail} alt={product.title} />
            </Link>
            <Link to={`/shop/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h5>{product.title}</h5>
            </Link>
            <p style={{ color: 'red' }}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductAll
