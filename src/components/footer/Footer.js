import './Footer.css'
import logowhite from '../../assets/logo-white.png'

function Footer() {
    return (
        <footer>
            <div id='logoContainer'>
                <img src={logowhite} alt='footer logo' id='footerLogo' />
            </div>
            <p id='footerText'>&copy; 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer