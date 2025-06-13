import { useContext, useEffect } from "react"; // Adicionar useEffect
import { RotaContext } from "./contexts/RotaContext.jsx";
import Cabecalho from "./components/Cabecalho.jsx";
import Conteudo from "./components/Conteudo.jsx";

// Páginas de Login, Home, Perfil
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Perfil from "./pages/Perfil.jsx";

// Páginas de Animais
import ListarAnimais from "./pages/ListarAnimais.jsx";
import NovoAnimal from "./pages/NovoAnimal.jsx";
import EditarAnimal from "./pages/EditarAnimal.jsx";

// Páginas de Produtos
import ListarProdutos from "./pages/ListarProdutos.jsx";
import NovoProduto from "./pages/NovoProduto.jsx";
import EditarProduto from "./pages/EditarProduto.jsx";

function App() {
  const { rota, autenticado, setRota } = useContext(RotaContext);

  // Efeito para redirecionar para login se não autenticado e tentar acessar rota restrita
  useEffect(() => {
    if (!autenticado && rota !== "/login") {
      setRota("/login");
    }
  }, [autenticado, rota, setRota]);

  if (!autenticado) {
    return <Login />; // Se não autenticado, sempre mostra a página de Login
  }

  // Se autenticado, renderiza o cabeçalho e o conteúdo com base na rota
  return (
    <>
      <Cabecalho />
      <Conteudo>
        {/* Rotas de Animais */}
        {rota === "/listar-animais" && <ListarAnimais />}
        {rota === "/novo-animal" && <NovoAnimal />}
        {rota.startsWith("/editar-animal") && <EditarAnimal />}

        {/* Rotas de Produtos */}
        {rota === "/listar-produtos" && <ListarProdutos />}
        {rota === "/novo-produto" && <NovoProduto />}
        {rota.startsWith("/editar-produto") && <EditarProduto />}

        {/* Rotas de Páginas Estáticas (Dashboard, Perfil) */}
        {rota === "/home" && <Home />}
        {rota === "/perfil" && <Perfil />}
      </Conteudo>
    </>
  );
}

export default App;