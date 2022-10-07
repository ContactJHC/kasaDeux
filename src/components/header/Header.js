import './Header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div id="kasa-header">
            <img src={logo} alt='logo de Kasa' id='kasa-logo' />
            <nav id='kasa-nav'>
                <Link to="/" className='kasa-nav'>Accueil</Link>
                <Link to="/apropos" className='kasa-nav'>À propos</Link>
            </nav>
        </div>
    )
}

export default Header