import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import './styles/Main.css'
import Home from "./pages/Home";

function App() {
  return (
    <div className="pl-[300px]">
      <Header/>
      <main className="bg-img">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
