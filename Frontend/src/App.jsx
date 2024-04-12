import React from 'react';
import Home from './Home/Home.jsx';

import { Navigate,Routes, Route } from 'react-router-dom';
import Courses from './courses/Courses.jsx';
import Course from './components/Course.jsx';
import Signup from './components/Signup.jsx';
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "../src/context/AuthProvider.jsx";

function App() {
  const [authUser , setAuthUser] = useAuth()

  console.log(authUser);
  return (
    <>
      <div className=' dark:bg-slate-900 dark:text-white'>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>} />
      <Route path="/signup" element={<Signup/>} />
     

      </Routes>
      <Toaster/>
      </div>
    </>
  );
}

export default App;


