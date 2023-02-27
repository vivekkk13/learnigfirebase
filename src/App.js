import "./App.css";
import Index from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbars from "./components/Navbar";
import Listing from "./components/listing";
import Information from "./components/information";
import Login from "./components/login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/addbook" element={<Index />} />
          <Route path="/addbook/:id" element={<Index />} />
          <Route path="/books/view/:id" element={<Information />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
