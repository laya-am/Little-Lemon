import './../App.css';
import Nav from "./Nav";
import Homepage from "./Homepage";
import Footer from "./Footer";
import Login from './Login';
import Reservations from "./Reservations";
import ConfirmedBooking from "./ConfirmedBooking";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes> 
        <Route path="/" element={<Homepage/>}></Route>
        {/* <Route path="/about" element={About}></Route>
        <Route path="/menu" element={Menu}></Route>*/}
        <Route path="/reservations" element={<Reservations/>}></Route>
        {/* <Route path="/orderonline" element={OrderOnline}></Route> */}
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/confirmedBooking" element={<ConfirmedBooking/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
