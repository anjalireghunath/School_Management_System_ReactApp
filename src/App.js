import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import AddFaculty from './components/AddFaculty';
import SearchFaculty from './components/SearchFaculty';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewStudent from './components/ViewStudent';

function App() {
  return (
   <div>

<BrowserRouter>
<Routes>
  <Route path='/' exact element={<AddStudent/>}/>
  <Route path='/addfac' exact element={<AddFaculty/>}/>
  <Route path='/sstud' exact element={<SearchStudent/>}/>
  <Route path='/sfac' exact element={<SearchFaculty/>}/>
  <Route path='/vstud' exact element={<ViewStudent/>}/>
</Routes>
</BrowserRouter>

   </div>
  );
}

export default App;
