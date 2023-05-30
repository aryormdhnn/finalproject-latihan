import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"; // Update import path
import CariDokter from "./pages/cariDokter"; // Update import path
import Artikel from "./pages/Artikel";
import Toko from "./pages/toko";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/Header";
import ProductList from './components/ProductList';


function App() {
  return (
    <>
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/:penyakit" element={<ProductList/>} />
        <Route path="/" element={<Home />} /> 
        <Route path="/cariDokter" element={<CariDokter />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/tokoobat" element={<Toko />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
