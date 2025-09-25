import useGlobalReducer from '../hooks/useGlobalReducer.jsx';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className='container'>
      <div className='row text-center text-white mt-5'>
        <h1 className='display-1 mt-5'>Home Component</h1>
      </div>
    </div>
  );
};
