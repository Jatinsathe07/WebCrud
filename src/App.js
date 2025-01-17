import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Read from './Read';

function App() {
  return (
    
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/create' element={<Create></Create>}></Route>
      <Route path='/update/:id' element={<Update></Update>}></Route>
      <Route path='/read/:id' element={<Read></Read>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
