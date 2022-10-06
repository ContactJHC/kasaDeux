import './NotFound.css'

function NotFound() {
    return (
        <div id='NotFoundContainer'>
            <p id='nombreQuatreCentQuatre'>404</p>
            <p id='texteDeNotFetch'>Oups! La page que vous demandez n'existe pas.</p>
            <a href='#' id='retourPageAccueil'><p>Retourner sur la page d'accueil</p></a>
        </div>
    )
}

export default NotFound