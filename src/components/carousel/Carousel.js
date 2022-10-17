import { useState } from 'react'
import arrowBack from '../../assets/icons/arrow_back_desktop.png'
import arrowForward from '../../assets/icons/arrow_forward_desktop.png'
import './Carousel.css'


function Carousel({picturesData}) {
    let [index, setIndex] = useState(0)
    const length = picturesData.length
    // const [length, setLength] = useState(picturesData.length)
    // useEffect(()=>{ setLength(picturesData.length)}, [picturesData])

    function nextSlide() {
        // setLength(picturesData.length)
        if (index === length -1) {
            setIndex(0)
        } else {
            setIndex(index+1)
        }
    }

    function prevSlide() {
        // setLength(picturesData.length)
        if (index === 0) {
            setIndex(length-1)
        } else {
            setIndex(index-1)
        }
    }

    return (
        <section id='carouselContainer'>
            <img src={arrowBack} alt='arrow back' id='arrBack' onClick={prevSlide}/>
            <img src={arrowForward} alt='arrow forward' id='arrForw' onClick={nextSlide}/>
            {picturesData.map((picture,ind) => {
                return (
                    <div className= {index === ind ? 'active' : 'inactive'} key = {ind}>
                    {ind===index && (
                        <div className='visiblePicture' style = {{
                            backgroundImage: `url(${picture})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            width: '100%',
                            minHeight: '415px'
                    }}>
                        </div>
                    // <img src={picture} alt='photographie du logement' className='visiblePicture' />
                        
                    )}
                    </div>
                )
            })}
            
            {/* <img src={picturesData[0]} alt='test' className='visiblePicture' /> */}
        </section>
    )
}

export default Carousel