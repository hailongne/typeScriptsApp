import Banner from '@/components/Banner/Banner'
import BannerFooter from '@/components/Banner/BannerFooter'
import Footer from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import ProductHome from '@/components/ProductHome/ProductHome'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <br />
      <div className='d-flex justify-content-center'>
        <h1>Các Sản Phẩm Của Chúng Tôi</h1>
      </div>
      <br />
      <ProductHome />
      <br />
      <BannerFooter />
      <Footer />
    </div>
  )
}

export default Home
