import BannerFooter from '@/components/Banner/BannerFooter'
import Footer from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import imgSp1 from '@/assets/product/sp1.png'
import imgSp2 from '@/assets/product/sp2.png'
import imgSp3 from '@/assets/product/sp3.png'
import imgSp4 from '@/assets/product/sp4.png'
import imgSp5 from '@/assets/product/sp5.png'
import imgSp6 from '@/assets/product/sp6.png'
import imgSp7 from '@/assets/product/sp7.png'
import imgSp8 from '@/assets/product/sp8.png'
import Banner from '@/components/Banner/Banner'
import { NavLink } from 'react-router-dom'

const ProductWAO = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <div className='container text-center'>
        <h1>Các sản phẩm của chúng tôi</h1>
        <br />
        <div className='row'>
          <div className='col'>
            <div className='card' style={{ width: '18rem' }}>
              <NavLink to='/id1'>
                <img src={imgSp1} className='card-img-top' alt='img product' />
              </NavLink>
              <div className='card-body'>
                <h6 className='card-title'>Fresh Morning Oolong Tea</h6>
                <p className='card-text'>138.000₫ </p>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card' style={{ width: '18rem' }}>
              <NavLink to=''>
                <img src={imgSp2} className='card-img-top' alt='img product' />
              </NavLink>
              <div className='card-body'>
                <h6 className='card-title'>Sunny Afternoon Oolong Tea</h6>

                <p className='card-text'>138,000₫ </p>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card' style={{ width: '18rem' }}>
              <NavLink to=''>
                <img src={imgSp3} className='card-img-top' alt='img product' />
              </NavLink>
              <div className='card-body'>
                <h6 className='card-title'>Dream-Dream Black Tea</h6>
                <p className='card-text'>138,000₫ </p>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card' style={{ width: '18rem' }}>
              <NavLink to=''>
                <img src={imgSp4} className='card-img-top' alt='img product' />
              </NavLink>
              <div className='card-body'>
                <h6 className='card-title'>Trà Hoa Atiso Đỏ Hibiscus WAO</h6>
                <p className='card-text'>90,000₫</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='container text-center'>
          <div className='row'>
            <div className='col'>
              <div className='card' style={{ width: '18rem' }}>
                <NavLink to=''>
                  <img src={imgSp5} className='card-img-top' alt='img product' />
                </NavLink>
                <div className='card-body'>
                  <h6 className='card-title'>Bột Kem Béo WAO (1kg)</h6>
                  <p className='card-text'>82,000₫</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card' style={{ width: '18rem' }}>
                <NavLink to=''>
                  <img src={imgSp6} className='card-img-top' alt='img product' />
                </NavLink>
                <div className='card-body'>
                  <h6 className='card-title'>Bột Sữa Chua Hàn Quốc POMONA YOGUR FRESH (1kg)</h6>
                  <p className='card-text'>305,000₫ </p>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card' style={{ width: '18rem' }}>
                <NavLink to=''>
                  <img src={imgSp7} className='card-img-top' alt='img product' />
                </NavLink>
                <div className='card-body'>
                  <h6 className='card-title'>Bột Kem Béo WAO (25kg)</h6>
                  <p className='card-text'>1,890,000₫</p>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card' style={{ width: '18rem' }}>
                <NavLink to=''>
                  <img src={imgSp8} className='card-img-top' alt='img product' />
                </NavLink>
                <div className='card-body'>
                  <h6 className='card-title'>Bột Sữa WAO (1kg)</h6>
                  <p className='card-text'>103,000₫</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <BannerFooter />
      <Footer />
    </>
  )
}

export default ProductWAO
