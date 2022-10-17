import './LocationHeader.css'
import Tag from '../tags/Tags'
import { FaStar } from 'react-icons/fa'


function LocationHeader({oneLocationData}) {

    const starNumber = parseInt(oneLocationData.rating, 10)
    return (
        <div id='locHeaderContainer'>
            <div id='namePlaceTags'>
                <div id='name'>
                    {oneLocationData.title}
                </div>
                <div id='place'>
                    {oneLocationData.location}
                </div>
                <div id='tags'>
                    {oneLocationData.tags.map((tag,indic) => {
                        return (
                            <Tag tagData={tag} key={`tag${tag}${indic}`}/>
                        )
                    })}
                </div>
            </div>
            <div id='ownerRating'>
                <div id='owner'>
                    <p id='ownerName'>{oneLocationData.host.name}</p>
                    <div id='ownerPictureContainer'>
                        <img src={oneLocationData.host.picture} alt='portrait hôte' id='hostPicture' />
                    </div>
                </div>
                <div id='rating'>
                    {[...Array(starNumber)].map((elem,indx) => {
                        return <FaStar key={`starRate${elem}${indx}`}/>
                    })}
                    {(oneLocationData.rating !==5) && (
                        [...Array(5-starNumber)].map((elem,indx) => {
                            return <FaStar fill='#E3E3E3' key={`starRate${elem}${indx}`}/>
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

export default LocationHeader