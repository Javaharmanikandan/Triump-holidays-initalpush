import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader";
import NavbarOne from "./Components/Navbar/NavbarOne";
// import NavbarTwo from "./Components/Navbar/NavbarTwo";
import Home from "./Pages/Home";
import HotelDetail from "./Pages/HotelDetail";
import Profile from "./Pages/Profile";
import Search from "./Pages/Search";
import ViewAllPhotos from "./Pages/ViewAllPhotos";
import "./Style/style.css";
import Login from "./Pages/Login";
import toast, { Toaster } from 'react-hot-toast';
import Register from "./Pages/Register";


function App() {

  // const LoaderState = useSelector((state)=>state.Loader.value.LoaderState)
  const LoaderState=false;

  return (
    <>
      <Router>
      <NavbarOne />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<HotelDetail />} />
        <Route path="/photos" element={<ViewAllPhotos />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Routes>
        <Loader active={LoaderState} />
        <Toaster />
      <Footer />

      </Router>

    </>
  );
}

// const HeaderOne = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </>

//   )
// }

// const HeaderTwo = () => {
//   return (
//     <>
//       <NavbarTwo />
//       <Routes>
       
//       </Routes>
//       <Footer />
//     </>
//   )
// }

export default App;
