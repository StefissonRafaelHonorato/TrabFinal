import { useState, useEffect } from "react";
import InputNome from "../components/InputNome.jsx";
import InputTexto from "../components/InputTexto.jsx";
import InputNumero from "../components/InputNumero.jsx";
import Botao from "../components/Botao.jsx";

function FormularioAnimal(props) {
  const [nome, setNome] = useState("");
  const [erroNome, setErroNome] = useState("");
  const [especie, setEspecie] = useState("");
  const [erroEspecie, setErroEspecie] = useState("");
  const [raca, setRaca] = useState("");
  const [erroRaca, setErroRaca] = useState("");
  const [idade, setIdade] = useState("");
  const [erroIdade, setErroIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [erroPeso, setErroPeso] = useState("");

  useEffect(() => {
    if (props.valores && Object.keys(props.valores).length > 0) {
      setNome(props.valores.nome || "");
      setEspecie(props.valores.especie || "");
      setRaca(props.valores.raca || "");
      setIdade(props.valores.idade || "");
      setPeso(props.valores.peso || "");
     
      setErroNome("");
      setErroEspecie("");
      setErroRaca("");
      setErroIdade("");
      setErroPeso("");
    }
  }, [props.valores]);

 
  const handleNomeChange = (e) => {
    setNome(e.target.value);
    if (erroNome) setErroNome(""); 
  };

  const handleEspecieChange = (e) => {
    setEspecie(e.target.value);
    if (erroEspecie) setErroEspecie("");
  };

  const handleRacaChange = (e) => {
    setRaca(e.target.value);
    if (erroRaca) setErroRaca("");
  };

  const handleIdadeChange = (e) => {
    setIdade(e.target.value);
    if (erroIdade) setErroIdade("");
  };

  const handlePesoChange = (e) => {
    setPeso(e.target.value);
    if (erroPeso) setErroPeso("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formValido = true;

    
    if (!nome.trim()) { 
      setErroNome("Nome é obrigatório");
      formValido = false;
    } else { setErroNome(""); } 

    
    if (!especie.trim()) {
      setErroEspecie("Espécie é obrigatória");
      formValido = false;
    } else { setErroEspecie(""); }

    
    if (!raca.trim()) {
      setErroRaca("Raça é obrigatória");
      formValido = false;
    } else { setErroRaca(""); }

    
    const idadeNum = parseFloat(idade);
    if (isNaN(idadeNum) || idadeNum <= 0) {
      setErroIdade("Idade deve ser um número positivo");
      formValido = false;
    } else { setErroIdade(""); }

   
    const pesoNum = parseFloat(peso);
    if (isNaN(pesoNum) || pesoNum <= 0) {
      setErroPeso("Peso deve ser um número positivo");
      formValido = false;
    } else { setErroPeso(""); }


    if (formValido) {
      props.onSubmit({ nome, especie, raca, idade: idadeNum, peso: pesoNum });
      
      if (!props.valores) {
        setNome("");
        setEspecie("");
        setRaca("");
        setIdade("");
        setPeso("");
      }
      
      setErroNome("");
      setErroEspecie("");
      setErroRaca("");
      setErroIdade("");
      setErroPeso("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputNome label="Nome do Animal" valor={nome} onChange={handleNomeChange} erro={erroNome} />
      <InputTexto label="Espécie" id="especie" valor={especie} onChange={handleEspecieChange} erro={erroEspecie} />
      <InputTexto label="Raça" id="raca" valor={raca} onChange={handleRacaChange} erro={erroRaca} />
      <InputNumero label="Idade" id="idade" valor={idade} onChange={handleIdadeChange} erro={erroIdade} />
      <InputNumero label="Peso (kg)" id="peso" valor={peso} onChange={handlePesoChange} erro={erroPeso} />
      <Botao type="submit" texto="Salvar" />
    </form>
  );
}

export default FormularioAnimal;