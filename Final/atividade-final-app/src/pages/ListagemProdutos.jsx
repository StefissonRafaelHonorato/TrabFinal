import './Listagem.css'; // Estilo comum para listagens
import './Listagem.css';

function ListagemProdutos(props) {
  return (
    <ul className="listagem-principal">
      <li className="listagem-cabecalho">
        <span>Nome</span>
        <span>Unidade</span>
        <span>Quantidade</span>
        <span>Ações</span>
      </li>
      {props.itens.map((produto) => (
        <li key={produto.id}>
          <span>{produto.nome}</span>
          <span>{produto.unidade}</span>
          <span>{produto.quantidade}</span>
          <span className="listagem-acoes">
            <button onClick={() => props.onModificar(produto.id)}>
              Editar
            </button>
            <button onClick={() => props.onRemover(produto.id)}>
              Remover
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ListagemProdutos;