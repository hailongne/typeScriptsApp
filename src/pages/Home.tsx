import Banner from '@/components/Banner/Banner'
import BannerFooter from '@/components/Banner/BannerFooter'
import ProductHome from '@/pages/ProductHome/ProductHome'

const Home = () => {
  return (
    <div>
      <Banner />
      <br />
      <div className='d-flex justify-content-center'>
        <h1>Các Sản Phẩm WAO</h1>
      </div>
      <br />
      <ProductHome />
      <br />
      <BannerFooter />
    </div>
  )
}

export default Home
