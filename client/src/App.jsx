import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/privateRoute";
import CreateListing from "./page1/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/about' element={<About />} />
                <Route path='/sign-in' element={<Signin />} />
                <Route path='/listing/:listingId' element={<Listing />} />

                <Route element={<PrivateRoute />}>
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/create-listing' element={<CreateListing />} />
                    <Route path='/update-listing/:listingId' element={<UpdateListing/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
