
import './style.css'
export default function Rodape() {
    return (
        <footer className="site-footer">
            <p>&copy; {new Date().getFullYear()} SENAI Bahia. Todos os direitos reservados.</p>
            <p className="footer-status"><span aria-hidden="true" /> Ambiente acadêmico</p>
        </footer>
    )
}