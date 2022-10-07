import './UnfoldingText.css'

// nous retourne le html avec ul et li pour le tableau en argument


function UnfoldingText({reliability}) {
    const testArray = (content) => {
        return (
            <ul>
                {content.map(e => <li>{e}</li>)}
            </ul>
        )
    }
let content = reliability.content
if (Array.isArray(reliability.content)) {
    content = testArray(reliability.content)
}
    return (
        <div className='unfoldingContainer'>
            <div className='unfoldingTitle'>
                <p>{reliability.title}</p>
            </div>
            <div className='unfoldingDescription'>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default UnfoldingText
