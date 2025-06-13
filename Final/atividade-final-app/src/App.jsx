import { useContext } from "react";
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
  const { rota } = useContext(RotaContext);

  // Lógica para determinar qual parte da aplicação renderizar
  // Ex: se a rota é para "gerenciamento de dados", mostra cabecalho + conteudo com menu e páginas
  // Senão, mostra apenas o login
  const renderizaAppPrincipal = rota.startsWith("/listar") || rota.startsWith("/novo") || rota.startsWith("/editar") || rota === "/home" || rota === "/perfil";
  const renderizaLogin = rota === "/login" || !renderizaAppPrincipal; // Rota inicial para login se não for uma rota principal

  return (
    <>
      {renderizaLogin && <Login />}

      {renderizaAppPrincipal && (
        <>
          <Cabecalho />
          <Conteudo>
            {/* Inclui o Menu aqui se for a parte principal da aplicação */}
            {rota === "/listar-animais" && <ListarAnimais />}
            {rota === "/novo-animal" && <NovoAnimal />}
            {rota.startsWith("/editar-animal") && <EditarAnimal />}

            {rota === "/listar-produtos" && <ListarProdutos />}
            {rota === "/novo-produto" && <NovoProduto />}
            {rota.startsWith("/editar-produto") && <EditarProduto />}

            {/* Exemplo de rota para Home e Perfil */}
            {rota === "/home" && <Home />}
            {rota === "/perfil" && <Perfil />}
          </Conteudo>
        </>
      )}
    </>
  );
}

export default App;