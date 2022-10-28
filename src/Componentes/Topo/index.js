import { Link } from "react-router-dom";
import './style.css'

const Topo = () =>(
    <header>
        <div className="limitar-secao">
            <img src="/assets/logo.png" />
            <nav>
            <Link className="link-topo" to="/">Home</Link>
            <Link className="link-topo "to="/Sabores">Sabores</Link>
            <Link className="link-topo" to="/Sobre">Sobre</Link>
            </nav>
        </div>
    </header>
)


export default Topo;
