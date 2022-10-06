import './Banner.css'
import coverBannerTwo from '../../assets/coverBannerTwo.png'

function BannerTwo() {
    return (
        <div id='bannerContainer'>
            <img src={coverBannerTwo} alt='landscape banner' id='bannerPicture' />
        </div>
    )
}

export default BannerTwo