import Secao from '../components/Secao';
import Painel from '../components/Painel';


function Home() {
  return (
    <Secao texto="Dashboard Agropecuário">
      <div className="card-grid">
        <Painel texto="Resumo de Rebanho" itens={["Bovinos: 150 cabeças", "Ovinos: 80 cabeças", "Aves: 500 unidades"]}/>
        <Painel texto="Próximas Vacinações" itens={["Bovinos: 20/07/2025", "Ovinos: 01/08/2025"]}/>
        <Painel texto="Estoque de Produtos" itens={["Ração: 500kg", "Medicamentos: 120 unidades", "Fertilizantes: 300kg"]}/>
        <Painel texto="Vendas Recentes" itens={["Leite: 1500L (09/06)", "Ovos: 100 dúzias (08/06)"]}/>
      </div>
    </Secao>
  );
}

export default Home;