import { Routes , Route , BrowserRouter } from 'react-router-dom'
import Home from './Components/Home';
import Invoices from './Components/Invoices';
import Add from './Components/Add';
import Modify from './Components/Modify';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={ <Home/> } />

          <Route path='/invoices' element={ <Invoices/> } />

          <Route path='/invoices/add' element={ <Add/> } />

          <Route path='/invoices/:id' element={ <Modify/> } />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
