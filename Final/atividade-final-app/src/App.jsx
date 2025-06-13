import { useContext, useEffect } from "react"; 
import { RotaContext } from "./contexts/RotaContext.jsx";
import Cabecalho from "./components/Cabecalho.jsx";
import Conteudo from "./components/Conteudo.jsx";
import Menu from "./components/Menu.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Perfil from "./pages/Perfil.jsx";


import ListarAnimais from "./pages/ListarAnimais.jsx";
import NovoAnimal from "./pages/NovoAnimal.jsx";
import EditarAnimal from "./pages/EditarAnimal.jsx";

function App() {
  const { rota, autenticado, setRota } = useContext(RotaContext);


  useEffect(() => {
    if (!autenticado && rota !== "/login") {
      setRota("/login");
    }
  }, [autenticado, rota, setRota]);

  if (!autenticado) {
    return <Login />; 
  }

  
  return (
    <>
      <Cabecalho />
      <Menu />
      <Conteudo>
        {}
        {rota === "/listar-animais" && <ListarAnimais />}
        {rota === "/novo-animal" && <NovoAnimal />}
        {rota.startsWith("/editar-animal") && <EditarAnimal />}

        {}
        {rota === "/home" && <Home />}
        {rota === "/perfil" && <Perfil />}
      </Conteudo>
    </>
  );
}

export default App;