import { useContext, useState } from "react";
import { adicionar } from "../services/AnimalService";
import { RotaContext } from "../contexts/RotaContext";
import FormularioAnimal from "./FormularioAnimal.jsx";

function NovoAnimal() {
    const [erro, setErro] = useState("");
    const { setRota } = useContext(RotaContext);

    const handleSalvar = async (animal) => {
        const resposta = await adicionar(animal);
        if (resposta.sucesso) {
            setErro("");
            setRota("/listar-animais");
        } else {
            setErro(resposta.mensagem);
        }
    };

    return (
        <>
            <h2>Novo Animal</h2>
            {erro && <p>{erro}</p>}
            <FormularioAnimal onSubmit={handleSalvar}/>
        </>
    );
}

export default NovoAnimal;