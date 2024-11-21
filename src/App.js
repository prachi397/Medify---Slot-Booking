import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './components/Home/HomePage';
import FindDoctors from "./components/FindDoctors/FindDoctors";
import MyBookings from "./components/MyBookings/MyBooking";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/find-doctors" element={<FindDoctors/>}/>
        <Route path="/my-bookings" element={<MyBookings/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
