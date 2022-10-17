import './IndexCards.css'
import getData from '../../services/Services'
import { Link } from 'react-router-dom'


function IndexCards() {
    const data = getData()
    function cardsFactory(titre, photo, id) {
        let routeId = '/fiche-logement/'+ id
        return (
            <Link to={routeId} className='card' key={id}>
                <p>{titre}</p>
                <img className='coverPicture' src={photo} alt='bien à louer' />
            </Link>
        )
    }

    return(
        <div id='cardsContainer'>
            {data.map((oneLocation) => (
                cardsFactory(oneLocation.title, oneLocation.cover, oneLocation.id)
            ))}
        </div>
    )
}

export default IndexCards