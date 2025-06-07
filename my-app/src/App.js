import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import SignUp from './components/SignUp/SignUp';
import { Navigate } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<SignIn/>}/>
        <Route path="/landing/:name/*" element={<Landing/>}/> */}
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      {/* <Route path="/category" element={<Category />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/profile" element={<Profile />} /> */}
      {/* Redirect any unknown route to login */}
      <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
