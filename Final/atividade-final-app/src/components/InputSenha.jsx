import './Input.css';

function InputSenha(props) {
    return (
        <>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" name="senha" value={props.valor} onChange={props.onChange} />
            {props.erro && <p>{props.erro}</p>}
        </>
    );
}

export default InputSenha;