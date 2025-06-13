import { useContext, useEffect, useState } from "react";
import { buscarTodos, remover } from "../services/AnimalService";
import ListagemAnimais from "./ListagemAnimais.jsx";
import { RotaContext } from "../contexts/RotaContext.jsx";

function ListarAnimais() {
    const [animais, setAnimais] = useState([]);
    const [erro, setErro] = useState("");
    const { setRota } = useContext(RotaContext);

    const carregarAnimais = async () => {
        const resposta = await buscarTodos();
        if (resposta.sucesso) {
            setAnimais(resposta.dados);
            setErro("");
        } else {
            setErro(resposta.mensagem);
        }
    };

    const handlerModificar = (id) => {
        setRota(`/editar-animal/${id}`);
    };

    const handlerRemover = async (id) => {
        const resposta = await remover(id);
        if (resposta.sucesso) {
            carregarAnimais();
        } else {
            setErro(resposta.mensagem);
        }
    };

    useEffect(() => {
        carregarAnimais();
    }, []);

    return (
        <>
            <h2>Meus Animais</h2>
            {erro && <p>{erro}</p>}
            <ListagemAnimais itens={animais} onModificar={handlerModificar} onRemover={handlerRemover} />
        </>
    );
}

export default ListarAnimais;