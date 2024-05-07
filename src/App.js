import Nopage from './Pages/Nopage/Nopage';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Todo from './Pages/Todo/Todo';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Todo/>}/>
          <Route path='/Todo' element={<Todo/>}/>
          <Route path='*' element={<Nopage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
