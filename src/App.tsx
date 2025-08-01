import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { UserProvider } from "./contexts/UserContext.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import ListaTemas from "./components/temas/listaTemas/ListaTemas.tsx";
import FormTema from "./components/temas/formTema/FormTema.tsx";
import DeletarTema from "./components/temas/deletarTema/DeletarTema.tsx";
import ListaPostagens from "./components/postagens/listaPostagens/ListaPostagens.tsx";
import FormPostagem from "./components/postagens/formPostagem/FormPostagem.tsx";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem.tsx";
import Perfil from "./pages/perfil/Perfil.tsx";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastrartema" element={<FormTema />} />
            <Route path="/editartema/:id" element={<FormTema />} />
            <Route path="/deletartema/:id" element={<DeletarTema />} />
            <Route path="/postagens" element={<ListaPostagens />} />
            <Route path="/cadastrarpostagem" element={<FormPostagem />} />
            <Route path="/editarpostagem/:id" element={<FormPostagem />} />
            <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
