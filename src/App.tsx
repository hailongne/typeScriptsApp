import './App.css'
import Footer from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import Home from './pages/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Dashboard from './pages/Admin/Dashboard'
import ProductAdd from './pages/Admin/ProductAdd'
import { useEffect, useState } from 'react'
import { TProduct } from './interfaces/TProduct'
import instance from './apis'
import { createProduct, getProducts } from './apis/product'
import ProductEdit from './pages/Admin/ProductEdit'
import ProductAll from './pages/ProductHome/ProductAll'

function App() {
  const [products, setProducts] = useState<TProduct[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    ;(async () => {
      const data = await getProducts()
      setProducts(data)
    })()
  }, [])
  console.log(products)
  const handleAdd = (product: TProduct) => {
    ;(async () => {
      const data = await createProduct(product)
      setProducts([...products, data])
      navigate('/admin')
    })()
  }

  const handleEdit = (product: TProduct) => {
    ;(async () => {
      const { data } = await instance.put(`/products/${product.id}`, product)
      setProducts(products.map((item) => (item.id === data.id ? data : item)))
      navigate('/admin')
    })()
  }
  return (
    <>
      <Header />
      <main className='container main'>
        <Routes>
          {/* client */}
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='/productall' element={<ProductAll products={products} />} />
            <Route path='/shop/:id' element={<ProductDetail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          {/* admin */}
          <Route path='/admin'>
            <Route index element={<Dashboard products={products} />} />
            <Route path='/admin/add' element={<ProductAdd onAdd={handleAdd} />} />
            <Route path='/admin/edit/:id' element={<ProductEdit onEdit={handleEdit} />} />
          </Route>
          {/* not found */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
