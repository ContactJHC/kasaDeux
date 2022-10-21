import './Location.css'
import UnfoldingText from '../../components/unfoldingText/UnfoldingText'
import Carousel from '../../components/carousel/Carousel'
import getData from '../../services/services'
import { useParams, Navigate } from 'react-router-dom'
import Tag from '../../components/tags/Tags'
import { FaStar } from 'react-icons/fa'

function Location() {
    const data = getData()
    const identifiant = useParams()
    const oneLocId = identifiant.id
    const oneLocData = data.filter((obj)=> obj.id === oneLocId)[0]
    const starNumber = parseInt(oneLocData.rating, 10)

    const descriptionSection = {
      title : 'Description',
      content : oneLocData.description
    }

    const equipementSection = {
        title: 'Équipements',
        content : oneLocData.equipments
    }

    return (
        <>
            {(oneLocData===undefined) ? (
                <>
                <Navigate replace to='*' />
                </>
            ) : ( 
                <>
                    <Carousel picturesData={oneLocData.pictures} />
                    <div id='locHeaderContainer'>
                    <div id='namePlaceTags'>
                        <div id='name'>
                            {oneLocData.title}
                        </div>
                        <div id='place'>
                            {oneLocData.location}
                        </div>
                        <div id='tags'>
                            {oneLocData.tags.map((tag,indic) => {
                                return (
                                    <Tag tagData={tag} key={`tag${tag}${indic}`}/>
                                )
                            })}
                        </div>
                    </div>
                    <div id='ownerRating'>
                        <div id='owner'>
                            <p id='ownerName'>{oneLocData.host.name}</p>
                            <div id='ownerPictureContainer'>
                                <img src={oneLocData.host.picture} alt='portrait hôte' id='hostPicture' />
                            </div>
                        </div>
                        <div id='rating'>
                            {[...Array(starNumber)].map((elem,indx) => {
                                return <FaStar key={`starRate${elem}${indx}`}/>
                            })}
                            {(oneLocData.rating !==5) && (
                                [...Array(5-starNumber)].map((elem,indx) => {
                                    return <FaStar fill='#E3E3E3' key={`starRate${elem}${indx}`}/>
                                })
                            )}
                        </div>
                    </div>
                </div>
                    <div id='containerDescription'>
                        <div id='containerOne'>
                            <UnfoldingText reliability={descriptionSection} />
                        </div>
                        <div id='containerTwo'>
                            <UnfoldingText reliability={equipementSection} /> 
                        </div>
                    </div>
                </>
            )}
            
        </>
    )

}

export default Location