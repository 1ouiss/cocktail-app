import Cocktails from "./pages/Cocktails";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OneCocktail from "./pages/OneCocktail";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/cocktail/:id" element={<OneCocktail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
