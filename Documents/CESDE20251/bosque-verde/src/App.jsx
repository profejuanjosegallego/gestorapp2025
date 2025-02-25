import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { Booking } from './components/pages/Booking/Booking';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;