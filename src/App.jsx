
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Shopping from "./pages/Shopping";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/shared/navbar/navbar";

import Footer from "./components/shared/footer/footer";



function App() {

  return (
	
	
	
    <div className="Aplicacion">
		<Navbar/>
		
	
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="Buy" element={<Shopping />} />
        <Route path="Register" element={<Register />} />
		<Route path="Login" element={<Login />} />
      </Routes>
	  <Footer/>
    </div>
	

  );
}
export default App;
