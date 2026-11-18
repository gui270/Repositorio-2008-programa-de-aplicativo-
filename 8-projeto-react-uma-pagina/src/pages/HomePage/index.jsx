import './style.css'

export default function HomePage() {
    return (
        <section className="client-panel" aria-labelledby="client-panel-title">
            <div className="panel-topline">
                <span className="panel-icon" aria-hidden="true">&lt;/&gt;</span>
                <span className="panel-code">MÓDULO 01 <span>/</span> CLIENTES</span>
                <span className="panel-index">01</span>
            </div>
            <div className="panel-content">
                <p className="panel-eyebrow">CADASTRO E RELACIONAMENTO</p>
                <h2 id="client-panel-title">Cadastrar clientes</h2>
                <p className="panel-description">
                    Organize as informações dos seus clientes em um só lugar e mantenha
                    sua gestão sempre atualizada.
                </p>
                <div className="panel-bottom">
                    <span className="panel-meta"><span aria-hidden="true" /> SISTEMA PRONTO</span>
                    <button className="panel-action" type="button">
                        Acessar módulo <span aria-hidden="true">-&gt;</span>
                    </button>
                </div>
            </div>
            <div className="panel-decoration" aria-hidden="true">
                <span>01</span>
                <span>10</span>
                <span>11</span>
                <span>00</span>
            </div>
        </section>
    )
}
            
            
