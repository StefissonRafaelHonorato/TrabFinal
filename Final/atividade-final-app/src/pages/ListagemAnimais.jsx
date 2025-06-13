import './Listagem.css'; // Estilo comum para listagens
import './Listagem.css';

function ListagemAnimais(props) {
  return (
    <ul className="listagem-principal">
      <li className="listagem-cabecalho">
        <span>Nome</span>
        <span>Espécie</span>
        <span>Idade</span>
        <span>Peso (kg)</span>
        <span>Ações</span>
      </li>
      {props.itens.map((animal) => (
        <li key={animal.id}>
          <span>{animal.nome}</span>
          <span>{animal.especie}</span>
          <span>{animal.idade}</span>
          <span>{animal.peso}</span>
          <span className="listagem-acoes">
            <button onClick={() => props.onModificar(animal.id)}>
              Editar
            </button>
            <button onClick={() => props.onRemover(animal.id)}>
              Remover
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ListagemAnimais;