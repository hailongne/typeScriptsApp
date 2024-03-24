import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import ProductWAO from './pages/ProductWAO'

function App() {
  return (
    <>
      <Routes>
        <Route path='/tranguyenlawao' element={<ProductWAO />} />
        <Route path='/' element={<Home />} />
        <Route path='/shop/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
