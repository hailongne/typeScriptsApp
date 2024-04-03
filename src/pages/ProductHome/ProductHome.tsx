import product1 from '@/assets/product1.png'
import product2 from '@/assets/product2.png'
import product3 from '@/assets/product3.png'
import product4 from '@/assets/product4.png'

const ProductHome = () => {
  return (
    <>
      <div className='container text-center d-flex justify-content-center'>
        <div className='row'>
          <div className='col'>
            <div className='card' style={{ width: '18rem' }}>
              <img src={product2} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h6 className='card-title'>Trà Nguyên Lá WAO</h6>
                <p className='card-text'>Trà nguyên lá "1 búp 2 lá non" từ xưởng trà WAO tại Bảo Lộc.</p>
                <a href='/productall' className='btn btn-success'>
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card' style={{ width: '18rem' }}>
              <img src={product3} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h6 className='card-title'>Soulful WAO Tea</h6>
                <p className='card-text'>Dòng trà hoa với vị trà đậm đà và hương thơm hiện đại. </p>
                <a href='/productall' className='btn btn-success'>
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card' style={{ width: '18rem' }}>
              <img src={product4} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h6 className='card-title'>Bột Pha Chế</h6>
                <p className='card-text'>Đa năng, đáp ứng tất cả nhu cầu: trà sữa Việt Nam, trà sữa Đài Loan.</p>
                <a href='/productall' className='btn btn-success'>
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card' style={{ width: '18rem' }}>
              <img src={product1} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h6 className='card-title'>Mứt Thái Lan ShaveIcePlus</h6>
                <p className='card-text'>Mứt trái cây sản xuất tại Thái Lan với vị trái cây tự nhiên.</p>
                <a href='/productall' className='btn btn-success'>
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductHome
