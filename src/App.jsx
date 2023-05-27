import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"; // Update import path
import CariDokter from "./pages/cariDokter"; // Update import path
import Artikel from "./pages/Artikel";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/Header";


function App() {
  return (
    <>
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/cariDokter" element={<CariDokter />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
