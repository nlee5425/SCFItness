import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './home.js';
import Login from './login.js';
import firebase from './firebase';
import Sched from './schedule.js';
import Goal1 from './goals1';
import Goal2 from './goals2';
import Goal3 from './goals3';
import Post from './postlogin';
import Guest from './guest.js';
import PostGuest from './postguest.js';


function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  return (
    <div className="App">
        <Routes>
          <Route path = "/guest" element ={<Guest />}/>
          <Route path = "/postguest" element = {<PostGuest/>}/>
          <Route path="/" element={ user ? <Post user = {user}/> : <Login/>}/>
          <Route path="/goal1" element={<Goal1 user = {user}/>}/>
          <Route path="/goal2" element={<Goal2 user = {user}/>}/>
          <Route path="/goal3" element={<Goal3 user = {user}/>}/>
          <Route path="/home" element={<Home user={user}/>}/>
          <Route path="/sched" element={<Sched user={user}/>}/>
          

        </Routes>
     </div>
  );
}

export default App;
