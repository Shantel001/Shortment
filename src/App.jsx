import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Apartment from "./components/Apartment";
import Apartment1 from "./components/Apartment1";
import Book from "./components/Book";
import Payment from "./components/Payment";
import Bookflow from "./components/Bookflow";
import Favorite from "./components/Favorite";
import Bookings from "./components/Bookings";
import Manageacc from "./components/Manageacc";
import Loglanding from "./components/Loglanding";
import Message from "./components/Message";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/royalsuit" element={<Apartment />} />
        <Route path="/apartments" element={<Apartment1 />} />
        <Route path="/bookhere" element={<Book />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/userdashboard" element={<Bookflow />} />
        <Route path="/favoriteapartment" element={<Favorite />} />
        <Route path="/allbookings" element={<Bookings />} />
        <Route path="/accounts" element={<Manageacc />} />\
        {/* <Route path="/landingpageonlogin" element={<Loglanding />} /> */}
        <Route path="/message" element={<Message />} />

      </Routes>
    </>
  );
}

export default App;
