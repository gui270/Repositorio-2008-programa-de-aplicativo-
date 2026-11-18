
import './App.css'
import Cabecalho from './components/cabecalho'
import Rodape from './components/rodape'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
    <Cabecalho />
    <main className="app-main">
      <div className="page-intro">
        <p className="page-kicker">PAINEL DE CONTROLE</p>
        <h1 className="page-title">Gestão de clientes</h1>
        <p className="page-description">Acesse os recursos do sistema e acompanhe sua operação.</p>
      </div>
      <HomePage />
    </main>
    <Rodape />
    </>
  )
}

export default App
