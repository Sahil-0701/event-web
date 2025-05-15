import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import JoinUs from "./pages/JoinUs";
import MainLayout from "./layout/MainLayout";
import ProductDetails from "./pages/ProductDetails";

const AppContent = () => {
  const location = useLocation();
  const isAuthRoute = location.pathname === "/join-us";

  return (
    <div className="min-h-screen flex flex-col">
      {isAuthRoute ? (
        <Routes>
         <Route path="/join-us" element={<JoinUs />} />
        </Routes>
      ) : (
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/product-details" element={<ProductDetails/>} />
            
          </Route>
        </Routes>
      )}
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
