import './Input.css';

function InputTelefone(props) {
    return (
        <>
            <label htmlFor="telefone">{props.label || "Telefone"}</label>
            <input type="tel" id="telefone" name="telefone" value={props.valor} onChange={props.onChange} />
            {props.erro && <p>{}props.erro</p>}
        </>
    );
}

export default InputTelefone;