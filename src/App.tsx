import Footer from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import ProductAdd from './pages/Admin/ProductAdd'
import { useEffect, useState } from 'react'
import { TProduct } from './interfaces/TProduct'
import instance from './apis'
import Dashboard from './pages/Admin/Dashboard'
import ProductAll from './pages/ProductHome/ProductAll'

function App() {
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await instance.get('/products')
        console.log(data)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])

  const handleAdd = (product: TProduct) => {
    console.log(product)
  }

  return (
    <>
      <Header />
      <Routes>
        {/* client */}
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/shop/:id' element={<ProductDetail />} />
          <Route path='/productall' element={<ProductAll products={products} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        {/* admin */}
        <Route path='/admin'>
          <Route index element={<Dashboard products={products} />} />
          <Route path='/admin/add' element={<ProductAdd onAdd={handleAdd} />} />
        </Route>
        {/* not found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
