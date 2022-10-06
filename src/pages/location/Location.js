import './Location.css'
import LocationHeader from '../../components/locationHeader/LocationHeader'
import UnfoldingText from '../../components/unfoldingText/UnfoldingText'
import Carousel from '../../components/carousel/Carousel'
import data from '../../logements.json'


function Location() {
    let picturesdata = []
    data[5].pictures.forEach((unePhotoUnLieu) => {
      picturesdata.push(unePhotoUnLieu)
    })
  
    const oneLocData = data[5]
  
    const descriptionSection = {
      title : 'Description',
      content : oneLocData.description
    }

    let liEquipments = ''
    oneLocData.equipments.forEach((equipment) => {
        liEquipments = liEquipments + ' ' + equipment
    })

    const equipementSection = {
        title: 'Équipements',
        content : liEquipments
    }

    function Description() {
        return (
            <div id='containerDescription'>
                <div id='containerOne'>
                    <UnfoldingText reliability={descriptionSection} />
                </div>
                <div id='containerTwo'>
                    <UnfoldingText reliability={equipementSection} />
                </div>
            </div>
        )
    }

    return (
        <>
            <Carousel picturesData={picturesdata} />
            <LocationHeader oneLocationData={oneLocData} />
            <Description />
        </>
    )

}

export default Location