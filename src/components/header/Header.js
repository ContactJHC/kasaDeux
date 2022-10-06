import './Header.css'
import logo from '../../assets/logo.png'

function Header() {
    return (
        <div id="kasa-header">
            <img src={logo} alt='logo de Kasa' id='kasa-logo' />
            <div id='kasa-nav'>
                <div className='kasa-nav'>Accueil</div>
                <div className='kasa-nav'>À propos</div>
            </div>
        </div>
    )
}

export default Header