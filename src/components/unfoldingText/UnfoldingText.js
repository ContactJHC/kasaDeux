import './UnfoldingText.css'

function UnfoldingText({reliability}) {


    return (
        <div className='unfoldingContainer'>
            <div className='unfoldingTitle'>
                <p>{reliability.title}</p>
            </div>
            <div className='unfoldingDescription'>
                <p>{reliability.content}</p>
            </div>
        </div>
    )
}

export default UnfoldingText
