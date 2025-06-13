import { createContext, useState } from "react";

const RotaContext = createContext();

function RotaProvider(props) {
    const [rota, setRota] = useState("/listar-animais");

    return (
        <RotaContext.Provider value={{ rota, setRota }}>
                {props.children}
            </RotaContext.Provider>
    );
}

export { RotaContext, RotaProvider };