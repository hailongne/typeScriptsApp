import instance from '@/apis'
import Footer from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { TProduct } from '@/interfaces/TProduct'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<TProduct | null>(null)
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await instance.get(`/products/${id}`)
      setProduct(data)
    }
    getProduct()
  }, [])
  return (
    <div>
      <Header />
      <h2>{product?.title}</h2>
      <img src={product?.thumbnail} alt={product?.title} />
      <div>{product?.price}</div>
      <div>{product?.description}</div>
      <div>Con lai: {product?.stock}</div>
      <div>Rating: {product?.rating}</div>
      <br />
      <Footer />
    </div>
  )
}

export default ProductDetail
