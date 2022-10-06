import './styles/Banner.css'
import coverBanner from '../../assets/coverBanner.png'

function Banner() {
    return (
        <div id='bannerContainer'>
            <img src={coverBanner} alt='landscape banner' id='bannerPicture' />
        </div>
    )
}

export default Banner