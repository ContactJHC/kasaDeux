import './NotFound.css'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div id='NotFoundContainer'>
            <p id='nombreQuatreCentQuatre'>404</p>
            <p id='texteDeNotFetch'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" id='retourPageAccueil'><p>Retourner sur la page d'accueil</p></Link>            
        </div>
    )
}

export default NotFound