import Banner from '../../components/banners/Banner'
import coverBan from '../../assets/coverBanner.png'
import './home.css'
import getData from '../../services/services'
import { Link } from 'react-router-dom'

function Home() {
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
    return (
        <>
            <Banner coverBanner={coverBan}/>
            <div id='cardsContainer'>
                {data.map((oneLocation) => (
                    cardsFactory(oneLocation.title, oneLocation.cover, oneLocation.id)
                ))}
            </div>
        </>
    )
}

export default Home 