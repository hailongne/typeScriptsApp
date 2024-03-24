import instance from '@/apis'
import { TProduct } from '@/interfaces/TProduct'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await instance.get('/products')
        console.log(data)
        setProducts(data)
      } catch (error) {
        console.error(error)
      }
    }

    getProducts()

    return () => {}
  }, [])

  return (
    <div className='d-flex justify-content-center'>
      <h1>Các Sản Phẩm Của Chúng Tôi</h1>
      {/* Kiểm tra xem products có phải là một mảng không */}
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            {
              <div key={product.id}>
                <Link to={`/shop/${product.id}`}>
                  <h2>{product.title}</h2>
                </Link>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <Link to={`/shop/${product.id}`}>
                  <img width={100} src={product.thumbnail} alt={product.title} />
                </Link>
              </div>
            }
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  )
}

export default ProductList
