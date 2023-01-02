import './App.css';
import { Routes, Route, Router } from 'react-router-dom'
import Registration from './views/Registration';
import LandingPage from './views/LandingPage';
import Login from './views/Login';
import AdminPage from './views/AdminPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={`/user/registration`} element={<Registration/>}/>
        <Route path={`/user/login`} element={ <Login/> }/>
        <Route path={`/Home`} element={ <LandingPage/> }/>
        <Route path={`/admin`} element={ <AdminPage/> }/>
      </Routes>
    </div>
  );
}

export default App;
