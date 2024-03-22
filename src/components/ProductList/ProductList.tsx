import { TProduct } from '@/interfaces/TProduct'
import { useEffect, useState } from 'react'

const ProductList = () => {
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    // Cach 1:
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProducts(data)
      })

    // Cach 2:
    // const getProducts = async () => {
    //   try {
    //     const { data } = await instance.get('/products')
    //     console.log(data)
    //     setProducts(data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // getProducts()
  }, [])

  // ! DependencyList
  // ? TH1: Không có DependencyList - cứ có thay đổi thì render lại.
  // ? TH2: [] - Empty Array - Chỉ chạy một lần khi componentDidMount
  // ? TH3: [state1, state2,...] - Chạy lại khi 1 trong số các state được liệt kê có sự thay đổi.

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img width={100} src={product.thumbnail} alt={product.title} />
        </div>
      ))}
    </div>
  )
}

export default ProductList
