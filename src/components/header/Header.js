import './Header.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div id="kasa-header">
            <img src={logo} alt='logo de Kasa' id='kasa-logo' />
            <nav id='kasa-nav'>
                <NavLink 
                    to="/" 
                    end
                    className={({ isActive }) => 
                      (isActive ? "kasa-nav active-nav" : "kasa-nav not-active-nav")}
                    id='kasa-nav-accueil'>
                        Accueil
                </NavLink>
                <NavLink 
                    to="/apropos"
                    className={({ isActive }) => 
                      (isActive ? "kasa-nav active-nav" : "kasa-nav not-active-nav")}
                    id='kasa-nav-apropos'>
                        À propos
                </NavLink>
            </nav>
        </div>
    )
}

export default Header