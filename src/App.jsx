// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Marketplace from "./pages/Marketplace";
// import Pricing from "./pages/Pricing";
// import GetStarted from "./pages/GetStarted";
// import CreateCard from "./pages/CreateCard";
// import CreateTemplate from "./pages/CreateTemplate";
// import SpinWin from "./pages/SpinWin";
// import SignUp from "./pages/Signup";
// import SignIn from "./pages/Signin";
// import VendorSignUp from "./pages/VendorSignup";
// import VendorComplete from "./pages/VendorComplete";
// import ScheduleCard from "./pages/ScheduleCard";
// import Terms from "./pages/TermsofService";
// import Faq from "./pages/FrequentQuestions";
// import Privacy from "./pages/PrivacyPolicy";
// import Refund from "./pages/RefundPolicy";

// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import "./App.css";
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/get-started" element={<GetStarted />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/marketplace" element={<Marketplace />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/spinwin" element={<SpinWin />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/vendorsignup" element={<VendorSignUp />} />
//         <Route path="/vendorproceed" element={<VendorComplete />} />
//         <Route path="/create-card" element={<CreateCard />} />
//         <Route path="/create-template" element={<CreateTemplate />} />
//         <Route path="/schedule-card" element={<ScheduleCard />} />
//         <Route path="/terms" element={<Terms />} />
//         <Route path="/faq" element={<Faq />} />
//         <Route path="/privacy" element={<Privacy />} />
//         <Route path="/refund" element={<Refund />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext"; // make sure this path is correct

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Marketplace from "./pages/Marketplace";
// import Pricing from "./pages/Pricing";
// import GetStarted from "./pages/GetStarted";
// import CreateCard from "./pages/CreateCard";
// import CreateTemplate from "./pages/CreateTemplate";
// import SpinWin from "./pages/SpinWin";
// import SignUp from "./pages/Signup";
// import SignIn from "./pages/Signin";
// import VendorSignUp from "./pages/VendorSignup";
// import VendorComplete from "./pages/VendorComplete";
// import ScheduleCard from "./pages/ScheduleCard";
// import Terms from "./pages/TermsofService";
// import Faq from "./pages/FrequentQuestions";
// import Privacy from "./pages/PrivacyPolicy";
// import Refund from "./pages/RefundPolicy";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import ProtectedRoute from "./components/ProtectedRoute";

// import "./App.css";

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Wrap your entire route set with AuthProvider */}
//       <AuthProvider>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/marketplace" element={<Marketplace />} />
//           <Route path="/pricing" element={<Pricing />} />
//           <Route path="/get-started" element={<GetStarted />} />
//           <Route path="/spinwin" element={<SpinWin />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/vendorsignup" element={<VendorSignUp />} />
//           <Route path="/vendorproceed" element={<VendorComplete />} />
//           <Route path="/create-card" element={<CreateCard />} />
//           <Route path="/create-template" element={<ProtectedRoute><CreateTemplate /> </ProtectedRoute>} />
//           <Route path="/schedule-card" element={<ProtectedRoute><ScheduleCard /></ProtectedRoute>} />
//           <Route path="/terms" element={<Terms />} />
//           <Route path="/faq" element={<Faq />} />
//           <Route path="/privacy" element={<Privacy />} />
//           <Route path="/refund" element={<Refund />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/checkout" element={<Checkout />} />
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Marketplace from "./pages/Marketplace";
import Pricing from "./pages/Pricing";
import GetStarted from "./pages/GetStarted";
import CreateCard from "./pages/CreateCard";
import CreateTemplate from "./pages/CreateTemplate";
import SpinWin from "./pages/SpinWin";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import VendorSignUp from "./pages/VendorSignup";
import VendorComplete from "./pages/VendorComplete";
import ScheduleCard from "./pages/ScheduleCard";
import Terms from "./pages/TermsofService";
import Faq from "./pages/FrequentQuestions";
import Privacy from "./pages/PrivacyPolicy";
import Refund from "./pages/RefundPolicy";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
// import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/spinwin" element={<SpinWin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/vendorsignup" element={<VendorSignUp />} />
      <Route path="/vendorproceed" element={<VendorComplete />} />
      <Route path="/create-card" element={<CreateCard />} />
      <Route
        path="/create-template"
        element={
    
            <CreateTemplate />
          
        }
      />
      <Route
        path="/schedule-card"
        element={
          
            <ScheduleCard />
          
        }
      />
      <Route path="/terms" element={<Terms />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
