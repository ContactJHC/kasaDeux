import './UnfoldingText.css'
import vectorDown from '../../assets/icons/vectorDown.png'
import vectorUp from '../../assets/icons/vectorUp.png'
import { useState } from 'react'

// nous retourne le html avec ul et li pour le tableau en argument


function UnfoldingText({reliability}) {

    const [enabled, setEnabled] = useState(false)

    const testArray = (content) => {
        return (
            <ul>
                {content.map((e, i) => <li key={`li ${e}${i}`}>{e}</li>)}
            </ul>
        )
    }
    let content = reliability.content
    if (Array.isArray(reliability.content)) {
        content = testArray(reliability.content)
    }
    return (
        <div className='unfoldingContainer'>
            <img src={vectorDown} className={enabled ? 'vector vDown disabled' : 'vector vDown enabled'} alt='flèche vers le bas' onClick={e => setEnabled(!enabled)}/>
            <img src={vectorUp} className={enabled ? 'vector vUp enabled' : 'vector vUp disabled'} alt='flèche vers le haut' onClick={e => setEnabled(!enabled)}/>
            <div className='unfoldingTitle' onClick={e => setEnabled(!enabled)}>
                <p>{reliability.title}</p>                
            </div>
            {enabled && (
                <div className='unfoldingDescription' >
                    {content}
                </div>
            )}
            
        </div>
    )
}

export default UnfoldingText
