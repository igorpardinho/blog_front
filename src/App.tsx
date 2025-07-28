import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="min-h-[80vh]">
          <Routes>
            {/* <Route path="/" element={<Home titulo="Seja Bem Vinde" />}></Route>
            <Route
              path="/home"
              element={<Home titulo="Seja Bem Vinde" />}
            ></Route> */}
            <Route path="/" element={<Cadastro />}></Route>
          </Routes>
        </div>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
