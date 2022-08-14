import useFetch from '../hooks/useFetch'
import { useState, useEffect } from 'react'
import Loading from './Loading'

const Card_resident = ({url,loading}) => {

    const resident = useFetch(url)
    const [bgCircle, setBgCircle] = useState('white')
    const [change, setChange] = useState(true)

    useEffect(() => {
        if (resident?.status==='Dead'){
           return setBgCircle('Red')
        }if (resident?.status==='Alive'){
           return setBgCircle('Green')
        }
        setTimeout(() => {setChange(loading)},2000)
      }, [resident])

    
    if (change) {
        return <Loading />
    } else {
        return (

            <div className='card_container'>
             <header className="card_img">
               <img src={resident?.image} alt="" />
                 <div className="card_status">
                   <div className="circle" style={{backgroundColor: bgCircle}}></div>
                   <span>{resident?.status}</span>
                 </div>
             </header>
             <div className="card_info">
               <h2>{resident?.name}</h2>
               <ul className='card_list'>
                 <li><span>Origen Name: </span>{resident?.origin.name}</li>
                 <li><span>Episode: </span>{resident?.episode.length}</li>
               </ul>
             </div>
           </div>
         )
    }

}

export default Card_resident