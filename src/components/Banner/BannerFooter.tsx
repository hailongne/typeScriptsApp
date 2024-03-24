import banner from '@/assets/bannerFooter.jpg'
const BannerFooter = () => {
  return (
    <div id='carouselExampleSlidesOnly' className='carousel slide' data-bs-ride='carousel'>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src={banner} className='d-block w-100' alt='...' />
        </div>
      </div>
    </div>
  )
}

export default BannerFooter
