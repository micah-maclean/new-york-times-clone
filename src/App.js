import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/world' element={<World/>}/>
          <Route path='/science' element={<Science/>}/>
          <Route path='/tech' element={<Tech/>}/>
          <Route path='/health' element={<Health/>}/>
          <Route path='/politics' element={<Politics/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
