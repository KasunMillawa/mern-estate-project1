import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Signin from "./pages/Signin";
//import Profile from "./Profile";
import Header from "./components/Header";
import Profile from "./pages/Profile";

export default function App() {
  return <BrowserRouter>

  <Header/>

  <Routes>

  <Route path='/' element={<Home/>} />
  <Route path='/sign-up' element={<SignUp/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/sign-in' element={<Signin/>} />
  <Route path='/profile' element={<Profile/>} />



  </Routes>
  </BrowserRouter>
}

