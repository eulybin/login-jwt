import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container'>
        <div className='ms-auto'>
          <Link to='/login'>
            <button className='btn btn-primary btn-lg px-3'>Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
