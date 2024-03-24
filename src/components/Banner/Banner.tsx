import Banner1 from '@/assets/banner1.png'
import Banner2 from '@/assets/banner2.png'
import Banner3 from '@/assets/banner3.png'

const Banner = () => {
  return (
    <div id='carouselExampleSlidesOnly' className='carousel slide' data-bs-ride='carousel'>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src={Banner1} className='d-block w-100' alt='...' />
        </div>
        <div className='carousel-item'>
          <img src={Banner2} className='d-block w-100' alt='...' />
        </div>
        <div className='carousel-item'>
          <img src={Banner3} className='d-block w-100' alt='...' />
        </div>
      </div>
    </div>
  )
}

export default Banner
