import { useContext, useEffect, useState } from "react";
import { buscarTodos, remover } from "../services/ProdutoService";
import ListagemProdutos from "./ListagemProdutos.jsx";
import { RotaContext } from "../contexts/RotaContext.jsx";

function ListarProdutos() {
    const [produtos, setProdutos] = useState([]);
    const [erro, setErro] = useState("");
    const { setRota } = useContext(RotaContext);

    const carregarProdutos = async () => {
        const resposta = await buscarTodos();
        if (resposta.sucesso) {
            setProdutos(resposta.dados);
            setErro("");
        } else {
            setErro(resposta.mensagem);
        }
    };

    const handleModificar = (id) => {
        setRota(`/editar-produto/${id}`);
    };

    const handlerRemover = async (id) => {
        const resposta = await remover(id);
        if (resposta.sucesso) {
            carregarProdutos();
        } else {
            setErro(resposta.mensagem);
        }
    };

    useEffect(() => {
        carregarProdutos();
    }, []);

    return (
        <>
            <h2>Meus Produtos</h2>
            {erro && <p>{erro}</p>}
            <ListagemProdutos itens={produtos} onModificar={handleModificar} onRemover={handlerRemover} />
        </>
    );
}

export default ListarProdutos;