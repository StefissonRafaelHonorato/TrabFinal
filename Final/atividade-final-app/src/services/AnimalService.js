import axios from "axios";

const url = import.meta.env.VITE_API_ANIMAIS_URL;


async function buscarTodos() {
    try {
        const response = await axios.get(url);
        return { sucesso: true, dados: response.data };
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        return { sucesso: false, mensagem: "Erro ao buscar animal!" };
    }
}

async function buscarPorId(id) {
    try {
        const response = await axios.get(`${url}/${id}`);
        return { sucesso: true, dados: response.data };
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        return { sucesso: false, mensagem: "Erro ao buscar animal por ID!" };
    }
}

async function adicionar(animal) {
    try {
        const response = await axios.post(url, animal);
        return { sucesso: true, dados: response.data };
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        return { sucesso: false, mensagem: "Erro ao adicionar animal!" };
    }
}

async function modificar(id, animal) {
    try {
        const response = await axios.put(`${url}/${id}`, animal);
        return { sucesso: true, dados: response.data };
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        return { sucesso: false, mensagem: "Erro ao modifcar animal" };
    }
}

async function remover(id) {
    try {
        const response = await axios.delete(`${url}/${id}`);
        return { sucesso: true, dados: response.data };
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        return { sucesso: false, mensagem: "Erro ao remover animal!" };
    }
}

export { buscarTodos, buscarPorId, adicionar, modificar, remover };