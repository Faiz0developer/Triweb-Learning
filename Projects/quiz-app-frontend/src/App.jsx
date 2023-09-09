import Navbar from "./components/layout/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main className="flex justify-center">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/register" element={<RegisterUser/>} />
              <Route path="/login" element={<LoginUser/>} />
            </Routes>    
      </main>
    </BrowserRouter>
  );
}

export default App;
