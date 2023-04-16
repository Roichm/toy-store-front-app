import "./styles/style.scss";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import About from "./components/about";
import Home from "./components/home";
import ProductGallery from "./components/productsGalery";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header>
        <Navbar />
       
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp/>} />
          <Route path="productsGalery" element={<ProductGallery />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
