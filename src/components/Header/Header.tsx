import { NavLink } from 'react-router-dom'

import style from './custom-bootstrap.css'

export const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <NavLink to='/' className='navbar-brand '>
          welcome
        </NavLink>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/shop/:id' className='nav-link'>
                Shop
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/register' className='nav-link'>
                Register
              </NavLink>
            </li>
          </ul>
          <form className='d-flex' role='search'>
            <button className='btn btn-outline-success' type='submit'>
              <NavLink to='/login'>Login</NavLink>
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}
