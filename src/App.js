
import { Route, Routes } from 'react-router-dom';
import CustomerRouter from './Routers/CustomerRouter';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRouter />}></Route>
      </Routes>

      
      <div className='mt-3 lg:mt-6'>

      </div>
     
    </div>
  );
}

export default App;
