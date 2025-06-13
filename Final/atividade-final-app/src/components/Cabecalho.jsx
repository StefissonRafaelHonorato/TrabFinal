import Icone from './Icone';
import Titulo from './Titulo';
import InputPesquisar from './InputPesquisar';
import Menu from './Menu';
import './Cabecalho.css';

function Cabecalho() {
    return (
        <header>
            <div>
                <Titulo texto="AgroPet JM" />
            </div>
        </header>
    );
}

export default Cabecalho;