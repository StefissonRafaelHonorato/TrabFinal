import { useContext, useEffect, useState } from "react";
import { buscarPorId, modificar } from "../services/ProdutoService";
import { RotaContext } from "../contexts/RotaContext.jsx";
import FormularioProduto from "./FormularioProduto.jsx";

function EditarProduto() {
    const { rota, setRota } = useContext(RotaContext);
    const [produto, setProduto] = useState({});
    const [erro, setErro] = useState("");

    const id = rota.replace("/editar-produto/", "");

    const carregarProduto = async () => {
        const resposta = await buscarPorId(id);
        if (resposta.sucesso) {
            setProduto(resposta.dados);
            setErro("");
        } else {
            setErro(resposta.mensagem);
        }
    };

    const handleSalvar = async (produtoAtualizado) => {
        const resposta = await modificar(id, produtoAtualizado);
        if (resposta.sucesso) {
            setErro("");
            setRota("/listar-produtos");
        } else {
            setErro(resposta.mensagem);
        }
    };

    useEffect(() => {
        carregarProduto();
    }, [id]);

    return (
        <>
            <h2>Editar Produto</h2>
            {erro && <p>{erro}</p>}
            <FormularioProduto onSubmit={handleSalvar} valores={produto} />
        </>
    );
}

export default EditarProduto;