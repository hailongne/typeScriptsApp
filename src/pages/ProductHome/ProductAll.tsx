import { TProduct } from '@/interfaces/TProduct'
import { Link } from 'react-router-dom'

type Props = {
  products: TProduct[]
}

const ProductAll = ({ products }: Props) => {
  return (
    <div className='container'>
      <h1>Product List</h1>
      <div className='row'>
        {/* Kiểm tra xem products có tồn tại và là một mảng không */}
        {Array.isArray(products) && products.length > 0 ? (
          // Nếu là mảng và có phần tử, thực hiện việc hiển thị sản phẩm
          products.map((product) => (
            <div key={product.id} className='col'>
              <Link to={`/shop/${product.id}`}>
                <h2>{product.title}</h2>
              </Link>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <Link to={`/shop/${product.id}`}>
                <img width={100} src={product.thumbnail} alt={product.title} />
              </Link>
            </div>
          ))
        ) : (
          // Nếu không có sản phẩm hoặc không phải là mảng, hiển thị thông báo không có sản phẩm
          <div className='col'>
            <p>No products available</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductAll
