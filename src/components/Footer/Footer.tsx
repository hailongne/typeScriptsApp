import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      <div className='card text-center'>
        <div className='card-header'>Thank you for supporting our tea shop!</div>
        <div className='card-body'>
          <h5 className='card-title'>
            FPT Cao Đẳng - Trịnh Văn Bô Số 1 P. Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội 100000, Vietnam
          </h5>
          <p className='card-text'>Hotline: 0369 312 858.</p>
          <NavLink to='https://www.facebook.com/profile.php?id=100030216102052' className='btn btn-primary btn-green'>
            Page Của Chúng Mình
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Footer
