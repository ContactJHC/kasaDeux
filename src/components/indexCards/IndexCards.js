import './IndexCards.css'
import data from '../../logements.json'
import { Link } from 'react-router-dom'


function IndexCards() {

    function cardsFactory(titre, photo, id) {
        let routeId = '/fiche-logement/'+ id
        return (
            <Link to={routeId} className='card'>
                <p>{titre}</p>
                <img className='coverPicture'src={photo} alt='bien à louer' />
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