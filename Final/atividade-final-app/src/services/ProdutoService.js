import axios from "axios";

const url = import.meta.env.VITE_API_PRODUTOS_URL;

async function buscarTodos() {
    try {
        const response = await axios.get(url);
        return { sucesso: true, dados: response.data };
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        return { sucesso: false, mensagem: "Erro ao buscar produtos!" };
    }
}

async function buscarPorId(id) {
    try {
        const response = await axios.get(`${url}/${id}`);
        return { sucesso: true, dados: response.data };
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        return { sucesso: false, mensagem: "Erro ao buscar produto por ID!" };
    }
}

async function adicionar(produto) {
    try {
        const response = await axios.post(url, produto);
        return { sucesso: true, dados: response.data };
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        return { sucesso: false, mensagem: "Erro ao adicionar produto!"};
    }
}

async function modificar(id, produto) {
    try {
        const response = await axios.put(`${url}/${id}`, produto);
        return { sucesso: true, dados: response.data };
    } catch {
        return { sucesso: false, mensagem: "Erro ao modificar produto!" };
    }
}

async function remover(id) {
    try {
        const response = await axios.delete(`${url}/${id}`);
        return { sucesso: true, dados: response.data };
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        return { sucesso: false, mensagem: "Erro ao remover produto!" };
    }
}

export { buscarTodos, buscarPorId, adicionar, modificar, remover };