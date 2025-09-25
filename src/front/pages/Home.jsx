import useGlobalReducer from '../hooks/useGlobalReducer.jsx';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className='container'>
      <div className='row text-center'>
        <h1>Home Component</h1>
      </div>
    </div>
  );
};
