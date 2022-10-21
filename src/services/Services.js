import data from '../data/logements.json'

function getData() {
    return (
        data
    )
}

export default getData

// async function getData() {

//     let data = ''
//     await fetch('../data/logements.json').then(async (response) => {
//         data = await response.json()  
//     }).catch((err) => {
//         console.log('rejected', err)
//         })
//     return (data)
// }

// export default getData





// async function getData() {
//     try {
//       const response = await fetch('../../data/logements.json')
//       return await response.json()
//     } catch (erreur) {
//       console.log(erreur)
//     }
//   }

// export default getData



// import data from '../logements.json'
// import { useState, useEffect } from "react"
// function getData() {
//     const [data, setData] = useState([])
//     useEffect(()=>{
//         fetch('../../data/logements.json')
//         .then(response => response.json())
//         .then(json => setData(json))
//     }, [])
//     return (
//         <>
//             {data}
//         </>
//     )
// }
// export default getData