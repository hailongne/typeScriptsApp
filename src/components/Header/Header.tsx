import { NavLink } from 'react-router-dom'

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
            <form className='container-fluid justify-content-start'>
              <NavLink to='/shop/:id'>
                <button className='btn btn-outline-success me-2' type='button'>
                  Shopping
                </button>
              </NavLink>
              <NavLink to='/login'>
                <button className='btn btn-outline-success me-2' type='button'>
                  Login
                </button>
              </NavLink>
            </form>
          </form>
        </div>
      </div>
    </nav>
  )
}
