import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='container d-flex align-items-center justify-content-center flex-column'>
      <div className='row bg-secondary border border-dark text-white p-5 mt-5 rounded'>
        <h2 className='text-center mb-4'>Register</h2>
        <form>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Email
            </label>
            <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
          </div>

          <div className='mb-3'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Password
            </label>
            <input type='password' className='form-control' id='exampleInputPassword1' />
          </div>

          <button type='submit' className='btn btn-primary btn-lg'>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
