import { useContext, useState } from "react";
import { adicionar } from "../services/ProdutoService";
import { RotaContext } from "../contexts/RotaContext.jsx";
import FormularioProduto from "./FormularioProduto.jsx";

function NovoProduto() {
    const [erro, setErro] = useState("");
    const { setRota } = useContext(RotaContext);

    const handleSalvar = async (produto) => {
        const resposta = await adicionar(produto);
        if (resposta.sucesso) {
            setErro("");
            setRota("/listar-produtos");
        } else {
            setErro(resposta.mensagem);
        }
    };

    return (
        <>
            <h2>Novo Produto</h2>
            {erro && <p>{erro}</p>}
            <FormularioProduto onSubmit={handleSalvar} />
        </>
    );
}

export default NovoProduto;