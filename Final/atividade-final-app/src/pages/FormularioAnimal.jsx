import { useState, useEffect } from "react";
import InputNome from "../components/InputNome.jsx";
import InputTexto from "../components/InputTexto.jsx"; // Para espécie
import InputNumero from "../components/InputNumero.jsx"; // Para idade e peso

function FormularioAnimal(props) {
  const [nome, setNome] = useState("");
  const [erroNome, setErroNome] = useState("");
  const [especie, setEspecie] = useState("");
  const [erroEspecie, setErroEspecie] = useState("");
  const [idade, setIdade] = useState("");
  const [erroIdade, setErroIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [erroPeso, setErroPeso] = useState("");

  useEffect(() => {
    if (props.valores && Object.keys(props.valores).length > 0) {
      setNome(props.valores.nome || "");
      setEspecie(props.valores.especie || "");
      setIdade(props.valores.idade || "");
      setPeso(props.valores.peso || "");
    }
  }, [props.valores]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formValido = true;
    if (!nome) {
      setErroNome("Nome é obrigatório");
      formValido = false;
    } else { setErroNome(""); }

    if (!especie) {
      setErroEspecie("Espécie é obrigatória");
      formValido = false;
    } else { setErroEspecie(""); }

    if (!idade || idade <= 0) {
      setErroIdade("Idade deve ser um número positivo");
      formValido = false;
    } else { setErroIdade(""); }

    if (!peso || peso <= 0) {
      setErroPeso("Peso deve ser um número positivo");
      formValido = false;
    } else { setErroPeso(""); }


    if (formValido) {
      props.onSubmit({ nome, especie, idade: parseFloat(idade), peso: parseFloat(peso) });
      if (!props.valores) { // Limpa apenas se não for edição
        setNome("");
        setEspecie("");
        setIdade("");
        setPeso("");
      }
      setErroNome("");
      setErroEspecie("");
      setErroIdade("");
      setErroPeso("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputNome label="Nome do Animal" valor={nome} onChange={(e) => setNome(e.target.value)} erro={erroNome} />
      <InputTexto label="Espécie" id="especie" valor={especie} onChange={(e) => setEspecie(e.target.value)} erro={erroEspecie} />
      <InputNumero label="Idade" id="idade" valor={idade} onChange={(e) => setIdade(e.target.value)} erro={erroIdade} />
      <InputNumero label="Peso (kg)" id="peso" valor={peso} onChange={(e) => setPeso(e.target.value)} erro={erroPeso} />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default FormularioAnimal;