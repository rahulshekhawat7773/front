import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup"
import Home from "./pages/home";
import Login from "./pages/login";

//admin panel
import Dashboard from "./pages/deshboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />

    
    {/* admin panel */}

<Route path="/admin/dashboard" element={<Dashboard/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
