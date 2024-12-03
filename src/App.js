import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Login from './components/login/Login';
import Ragistration from './components/login/Ragistration';
// import Footer from './components/footer/Footer';      

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/Navbar' element={<Navbar />} />
            <Route path='/' element={<Main />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Ragistration' element={<Ragistration />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
