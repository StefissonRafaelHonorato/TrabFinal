import { useContext } from "react";
import { RotaContext } from "../contexts/RotaContext.jsx";
import './Menu.css';

function Menu() {
  const { setRota, setAutenticado } = useContext(RotaContext); // Obter setAutenticado

  const handleNavegar = (rota) => (e) => {
    e.preventDefault();
    setRota(rota);
  };

  const handleSair = (e) => {
    e.preventDefault();
    setAutenticado(false); // Desautentica o usuário
    setRota("/login"); // Redireciona para o login
  };

  return (
    <nav>
      <ul>
        <li>
          <button onClick={handleNavegar("/home")}>Dashboard</button>
        </li>
        <li>
          <button onClick={handleNavegar("/listar-animais")}>Meus Animais</button>
        </li>
        <li>
          <button onClick={handleNavegar("/novo-animal")}>Novo Animal</button>
        </li>
        <li>
          <button onClick={handleNavegar("/perfil")}>Meu Perfil</button>
        </li>
        <li>
          <button onClick={handleSair}>Sair</button> {/* Botão de Sair */}
        </li>
      </ul>
    </nav>
  );
}
export default Menu;