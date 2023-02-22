import "./App.css";
import Index from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbars from "./components/Navbar";
import Listing from "./components/listing";
import Information from "./components/information";

function App() {
  return (
    <div>
      <Navbars />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/addbook" element={<Index />} />
          <Route path="/books/view/:id" element={<Information />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
