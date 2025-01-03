import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Signup from './pages/Signup';
// import LoginPage from './pages/LoginPage';
// import Dashboard from './pages/Dashboard.js';
import SellerDetails from './pages/SellerDetails.js';
// import BrandDetails from './pages/BrandDetails.js';
// import BankDetails from './pages/BankDetails.js'
// import ShippingLocations from './pages/ShippingLocations.js';
// import DigitalSignature from './pages/DigitalSignature.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<LoginPage />} /> */}
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/" element={<SellerDetails />} />
          {/* <Route path="/" element={<BrandDetails />} /> */}
          {/* <Route path="/" element={<BankDetails />} /> */}
          {/* <Route path="/" element={<ShippingLocations />} /> */}
          {/* <Route path="/" element={<DigitalSignature />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
