import { createContext, useState } from "react";

const RotaContext = createContext();

function RotaProvider(props) {
    const [rota, setRota] = useState("/listar-animais");
    const [autenticado, setAutenticado] = useState(false);

    return (
        <RotaContext.Provider value={{ rota, setRota, autenticado, setAutenticado }}>
                {props.children}
            </RotaContext.Provider>
    );
}

export { RotaContext, RotaProvider };