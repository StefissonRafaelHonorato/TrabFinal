import axios from "axios";

const url = import.meta.env.VITE_API_USUARIOS_URL;

async function autenticar(email, senha) {
  try {
    // No json-server, podemos buscar por email e senha
    const response = await axios.get(`${senha}`);
    if (response.data.length > 0) {
      return { sucesso: true, dados: response.data[0] }; // Retorna o primeiro usuário encontrado
    } else {
      return { sucesso: false, mensagem: "E-mail ou senha inválidos." };
    }
  } catch (error) {
    return { sucesso: false, mensagem: "Erro ao tentar autenticar!" };
  }
}

export { autenticar };