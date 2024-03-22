import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

export const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to='/' className={style.navLink}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/login' className={style.navLink}>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to='/register' className={style.navLink}>
          Register
        </NavLink>
      </li>
    </ul>

    // <nav className='navbar navbar-expand-lg bg-body-tertiary'>
    //   <div className='container-fluid'>
    //     <NavLink className='navbar-brand' to='/'>
    //       Navbar
    //     </NavLink>
    //     <button
    //       className='navbar-toggler'
    //       type='button'
    //       data-bs-toggle='collapse'
    //       data-bs-target='#navbarSupportedContent'
    //       aria-controls='navbarSupportedContent'
    //       aria-expanded='false'
    //       aria-label='Toggle navigation'
    //     >
    //       <span className='navbar-toggler-icon' />
    //     </button>
    //     <div className='collapse navbar-collapse' id='navbarSupportedContent'>
    //       <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
    //         <li className='nav-item'>
    //           <NavLink className='nav-link active' aria-current='page' to='/'>
    //             Home
    //           </NavLink>
    //         </li>
    //         <li className={style.navLink}>
    //           <NavLink className='nav-link' to='/shop'>
    //             Shop
    //           </NavLink>
    //         </li>
    //         <li className='nav-item'>
    //           <NavLink className='nav-link' to='/login'>
    //             Login
    //           </NavLink>
    //         </li>
    //         <li className='nav-item'>
    //           <NavLink className='nav-link' to='/register'>
    //             Register
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  )
}
