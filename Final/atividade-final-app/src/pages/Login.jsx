import { useContext, useState } from 'react';
import Conteudo from '../components/Conteudo';
import Rodape from '../components/Rodape';
import Icone from '../components/Icone';
import Titulo from '../components/Titulo';
import InputEmail from '../components/InputEmail';
import InputSenha from '../components/InputSenha';
import Botao from '../components/Botao';
import Link from '../components/Link';
import { autenticar } from '../services/UsuarioService'; // Importar serviço de autenticação
import { RotaContext } from '../contexts/RotaContext'; // Importar RotaContext

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const { setRota, setAutenticado } = useContext(RotaContext); // Obter setRota e setAutenticado

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro(''); // Limpa erros anteriores

    if (!email || !senha) {
      setErro('E-mail e senha são obrigatórios.');
      return;
    }

    const resposta = await autenticar(email, senha);
    if (resposta.sucesso) {
      setAutenticado(true); // Define o usuário como autenticado
      setRota('/home'); // Redireciona para a página principal (Home/Dashboard)
    } else {
      setErro(resposta.mensagem);
    }
  };

  return (
    <>
      <Conteudo estilo="login-container">
        <Titulo texto="AgroPet JM" />
        <form onSubmit={handleSubmit}> {/* Adiciona onSubmit */}
          <InputEmail valor={email} onChange={(e) => setEmail(e.target.value)} /> {/* Passa valor e onChange */}
          <InputSenha valor={senha} onChange={(e) => setSenha(e.target.value)} /> {/* Passa valor e onChange */}
          {erro && <p style={{color: 'red', textAlign: 'center'}}>{erro}</p>} {/* Exibe erro */}
          <Botao texto="Entrar"/>
          <Link texto="Esqueceu a Senha?" />
        </form>
      </Conteudo>
      <Rodape texto="Copyright (C) 2025 - AgroPet JM" />
    </>
  );
}

export default Login;