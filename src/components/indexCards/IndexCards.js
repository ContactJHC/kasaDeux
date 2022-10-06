import './IndexCards.css'
import data from '../../logements.json'

function cardsFactory(titre, photo) {
    return (
        <div className='card'>
            <p>{titre}</p>
            <img className='coverPicture'src={photo} alt='bien à louer' />
        </div>
    )
}

function IndexCards() {
    return(
        <div id='cardsContainer'>
            {data.map((oneLocation) => (
                cardsFactory(oneLocation.title, oneLocation.cover)
            ))}
        </div>
    )
}

export default IndexCards