import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import Header from "./components/Header";
import Destination from "./components/Destination";
import "react-toastify/dist/ReactToastify.css";
import DestinationDetail from "./components/DestinationDetail";
import AccomodationDetail from "./components/AccomodationDetail";
import Accomodation from "./components/Accomodation";
import Transportation from "./components/Transportation";
import Register from "./components/Register";
import Footer from './components/Footer';
import Login from "./components/Login";


// function App() {
//   const location = useLocation();
//   const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

//   return (
//     <BrowserRouter>
//       {/* Header Template */}
//       {!isAuthPage && <Header />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Destination" element={<Destination />} />
//         <Route path="/Accomodation" element={<Accomodation />} />
//         <Route path="/Transportation" element={<Transportation />} />
//         <Route path="/Destination/detail/:dId" element={<DestinationDetail />} />
//         <Route path="/Accomodation/detail/:cId" element={<AccomodationDetail />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//       {/* Footer Template */}
//       {!isAuthPage && <Footer />}
//     </BrowserRouter>
//   );
// }

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Destination" element={<Destination />} />
      <Route path="/Accomodation" element={<Accomodation />} />
      <Route path="/Transportation" element={<Transportation />} />
      <Route path="/Destination/detail/:dId" element={<DestinationDetail />} />
      <Route path="/Accomodation/detail/:cId" element={<AccomodationDetail />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ConditionalRender />
    </BrowserRouter>
  );
}

function ConditionalRender() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!isAuthPage && <Header />}
      <MainRoutes />
      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
