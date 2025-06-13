import { useContext, useEffect, useState } from "react";
import { buscarPorId, modificar } from "../services/AnimalService";
import { RotaContext } from "../contexts/RotaContext.jsx";
import FormularioAnimal from "./FormularioAnimal.jsx";

function EditarAnimal() {
    const { rota, setRota } = useContext(RotaContext);
    const [animal, setAnimal] = useState({});
    const [erro, setErro] = useState("");

    const id = rota.replace("/editar-animal/", "");

    const carregarAnimal = async () => {
        const resposta = await buscarPorId(id);
        if (resposta.sucesso) {
            setAnimal(resposta.dados);
            setErro("");
        } else {
            setErro(resposta.mensagem);
        }
    };

    const handleSalvar = async (animalAtualizado) => {
        const resposta = await modificar(id, animalAtualizado);
        if (resposta.sucesso) {
            setErro("");
            setRota("/listar-animais");
        } else {
            setErro(resposta.mensagem);
        }
    };

    useEffect(() => {
        carregarAnimal();
    }, [id]);

    return (
        <>
            <h2>Editar Animal</h2>
            {erro && <p>{erro}</p>}
            <FormularioAnimal onSubmit={handleSalvar} valores={animal} />
        </>
    );
}

export default EditarAnimal;