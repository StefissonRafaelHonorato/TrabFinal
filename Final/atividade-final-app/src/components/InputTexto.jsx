import './Input.css';

function InputTexto(props) {
    return (
        <>
            <label htmlFor="text" id={props.id} name={props.id} value={props.valor} onChange={props.onChange} />
            <input type="text" id={props.id} name={props.id} value={props.valor} onChange={props.onChange} />
            {props.erro && <p>{props.erro}</p>}
        </>
    );
}

export default InputTexto;