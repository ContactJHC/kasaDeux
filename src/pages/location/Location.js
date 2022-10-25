import './Location.css'
import UnfoldingText from '../../components/unfoldingText/UnfoldingText'
import Carousel from '../../components/carousel/Carousel'
import getData from '../../services/services'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import Tag from '../../components/tags/Tags'
import { FaStar } from 'react-icons/fa'
import { useEffect, useState} from 'react'

function Location() {
    const identifiant = useParams()
    const navigate = useNavigate()
    const [starNumber, setStarNumber] = useState(3)
    const [descriptionSection, setDescriptionSection] = useState({})
    const [equipementSection, setEquipementSection] = useState({})
    const [oneLocData, setOneLocData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const data = getData()
        const oneLocId = identifiant.id
        const ifOneLocData = data.filter((obj)=> obj.id === oneLocId)
        if (ifOneLocData === undefined || ifOneLocData.length === 0) {
            navigate('/404')

        } else {
            setOneLocData(ifOneLocData[0])
            setStarNumber(parseInt(ifOneLocData[0].rating, 10))
            setDescriptionSection({
                title : 'Description',
                content : ifOneLocData[0].description
            })
    
            setEquipementSection({
                title: 'Équipements',
                content : ifOneLocData[0].equipments
            })
            setLoading(false)
        }

    },[identifiant, navigate])
    

    

    return ( (loading) ? (<div></div>) : (

    
        <>
            {/* {(oneLocData===undefined) ? (
                <>
                <Navigate replace to='404' />
                </>
            ) : ( 
                <> */}
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
                
            {/* )} */}
            
        </>
    )
    )

}

export default Location