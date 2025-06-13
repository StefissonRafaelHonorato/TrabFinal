import { useState, useEffect } from "react";
import InputNome from "../components/InputNome.jsx"; // Usando InputNome como nome do produto
import InputTexto from "../components/InputTexto.jsx"; // Para unidade
import InputNumero from "../components/InputNumero.jsx"; // Para quantidade

function FormularioProduto(props) {
  const [nome, setNome] = useState("");
  const [erroNome, setErroNome] = useState("");
  const [unidade, setUnidade] = useState("");
  const [erroUnidade, setErroUnidade] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [erroQuantidade, setErroQuantidade] = useState("");

  useEffect(() => {
    if (props.valores && Object.keys(props.valores).length > 0) {
      setNome(props.valores.nome || "");
      setUnidade(props.valores.unidade || "");
      setQuantidade(props.valores.quantidade || "");
    }
  }, [props.valores]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formValido = true;
    if (!nome) {
      setErroNome("Nome do produto é obrigatório");
      formValido = false;
    } else { setErroNome(""); }

    if (!unidade) {
      setErroUnidade("Unidade é obrigatória (ex: kg, L, un)");
      formValido = false;
    } else { setErroUnidade(""); }

    if (!quantidade || quantidade <= 0) {
      setErroQuantidade("Quantidade deve ser um número positivo");
      formValido = false;
    } else { setErroQuantidade(""); }

    if (formValido) {
      props.onSubmit({ nome, unidade, quantidade: parseFloat(quantidade) });
      if (!props.valores) { // Limpa apenas se não for edição
        setNome("");
        setUnidade("");
        setQuantidade("");
      }
      setErroNome("");
      setErroUnidade("");
      setErroQuantidade("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputNome label="Nome do Produto" valor={nome} onChange={(e) => setNome(e.target.value)} erro={erroNome} />
      <InputTexto label="Unidade" id="unidade" valor={unidade} onChange={(e) => setUnidade(e.target.value)} erro={erroUnidade} />
      <InputNumero label="Quantidade" id="quantidade" valor={quantidade} onChange={(e) => setQuantidade(e.target.value)} erro={erroQuantidade} />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default FormularioProduto;