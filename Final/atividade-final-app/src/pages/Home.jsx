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
                <Secao texto="Dashboard Agro"> {}
                    <div className="card-grid"> {}
                        <Painel texto="Rodeios" itens={["Expo Umuarama", "Radar CRP 2026", "Votu International Rodeo"]}/>
                        <Painel texto="LeilOes" itens={["Nelores", "Ovinos e Caprinos", "Girolandos"]}/>
                        <Painel texto="Ultimas noticias" itens={["Gripe aviária", "Preço do Arroba", "Plantio vantajosos pra seca"]}/>
                        <Painel texto="Moda Country" itens={["Camisas", "Bonés", "BoTAS"]}/>
                    </div>
                </Secao>
            </Conteudo>
        </>
    );
}

export default Home;