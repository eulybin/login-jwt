import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container'>
        <div className='text-primary fs-3'>
          <Link className='text-decoration-none' to='/'>
            Home
          </Link>
        </div>
        <div className='ms-auto'>
          <Link to='/login'>
            <button className='btn btn-primary btn-lg px-3'>Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
