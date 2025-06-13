import './Input.css';

function InputEmail(props) {
    return (
        <>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" value={props.valor} onChange={props.onChange}/>
            {props.erro && <p>{props.erro}</p>}
        </>
    );
}

export default InputEmail;