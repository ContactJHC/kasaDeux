import './Banner.css'

function Banner({coverBanner}) {
    return (
        <div id='bannerContainer'>
            <img src={coverBanner} alt='landscape banner' id='bannerPicture' />
        </div>
    )
}

export default Banner