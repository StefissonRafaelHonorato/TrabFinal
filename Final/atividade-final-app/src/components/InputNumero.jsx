import './Input.css';

function InputNumero(props) {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="number" id={props.id} name={props.id} value={props.valor} onChange={props.onChange} />
            {props.erro && <p>{props.erro}</p>}
        </>
    );
}

export default InputNumero;