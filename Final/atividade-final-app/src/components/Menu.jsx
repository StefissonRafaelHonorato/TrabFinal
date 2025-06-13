import { useContext } from "react";
import { RotaContext } from "../contexts/RotaContext.jsx";
import './Menu.css';

function Menu() {
  const { setRota } = useContext(RotaContext);

  const handleNavegar = (rota) => (e) => {
    e.preventDefault();
    setRota(rota);
  };

  return (
    <nav>
      <ul>
        <li>
          <button onClick={handleNavegar("/listar-animais")}>Meus Animais</button>
        </li>
        <li>
          <button onClick={handleNavegar("/novo-animal")}>Novo Animal</button>
        </li>
         <li>
          <button onClick={handleNavegar("/listar-produtos")}>Meus Produtos</button>
        </li>
        <li>
          <button onClick={handleNavegar("/novo-produto")}>Novo Produto</button>
        </li>
        <li>
          <button onClick={handleNavegar("/home")}>Dashboard</button>
        </li>
        <li>
          <button onClick={handleNavegar("/perfil")}>Meu Perfil</button>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;