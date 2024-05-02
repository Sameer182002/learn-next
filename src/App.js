import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';
import UserContextt from './components/contextProvider/contextProvider';
import Login from './components/login/login';
import Profile from './components/profile/profile';

function App() {

  return (
    <div className='App'>
      <UserContextt>
        <Login/>
        <Profile/>
      </UserContextt>
    </div>
  )
}

export default App;
