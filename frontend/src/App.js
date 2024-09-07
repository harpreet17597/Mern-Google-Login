import React from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import GoogleLogin from './GoogleLogin';
import Dashboard from './Dashboard';
import PageNotFound from './PageNotFound';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  const GoogleAuthWrapper = () => {

    return <GoogleOAuthProvider clientId='912143510145-qj5n0s8ehlk72epjlfdojceq23q8km8l.apps.googleusercontent.com'>
      <GoogleLogin/>
    </GoogleOAuthProvider>
  }
  return (
  <Router>
    <Routes>
      <Route path='/login' element={<GoogleAuthWrapper/>}/>
      <Route path='/' element={<Navigate to='/login'/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  </Router>
  );
}

export default App;
