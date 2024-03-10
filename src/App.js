import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './pages/home/Home';
import Login from './pages/userAuth/Login';
import Register from './pages/userAuth/Register';
import Error from './pages/Error/Error';
import Teams from './pages/Teams/Teams';
import Doc from './pages/documentation/Doc';
import About from './pages/abouts/About';
import Profile from './pages/profile/Profile';
import Map from './component/Map';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/teams' element={<Teams />}/>
            <Route path='/map' element={<Map />}/>
            <Route path='/documentation' element={<Doc />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/profile' element={<Profile />}/>
          </Route>
          <Route path='/login' element={<Login />}/>
          <Route path='/sign-up' element={<Register />}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
