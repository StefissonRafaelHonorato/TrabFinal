import Cabecalho from '../components/Cabecalho';
import Conteudo from '../components/Conteudo';
import Menu from '../components/Menu';
import Secao from '../components/Secao';
import Painel from '../components/Painel';
import './Home.css';

function Home() {
    return (
        <>
            <Cabecalho />
            <Conteudo>
                <Menu />
                <Secao texto="Página Inicial"> {}
                    <div className="card-grid"> {}
                        <Painel texto="Mural de Avisos" itens={["Incrições para cursos de Extensão", "Evento Maratona de Programação", "Palestra sobre Inteligência Artificial"]}/>
                        <Painel texto="Agenda Acadêmica" itens={["Semana de provas P1", "Entrega de trabalhos", "Apresentação de TCC"]}/>
                        <Painel texto="Histórico de Notas" itens={["Lógica de programação - 5,5", "Banco de Dados - 7,8", "Engenharia de software - 5,3"]}/>
                        <Painel texto="Histórico de Faltas" itens={["Lógica de programação - 6", "Banco de dados - 0", "Engenharia de Software - 3"]}/>
                    </div>
                </Secao>
            </Conteudo>
        </>
    );
}

export default Home;