import './style.css'

export default function Cabecalho() {
    return (
        <header className="site-header">
            <a className="brand" href="/" aria-label="SENAI, início">
                <span className="brand-mark" aria-hidden="true">S</span>
                <span className="brand-name">SENAI<span className="brand-divider">/</span>BA</span>
            </a>
            <span className="header-caption">PLATAFORMA DE GESTÃO</span>
        </header>
    )
}
