import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import LocationCard from './components/LocationCard'
import Card_resident from './components/Card_resident'
import Footer from './components/Footer'
import Pagination from './components/Pagination'

function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')
  const [loading, setLoading] = useState(true)
  const [pagina, setPagina] = useState(1)
  const [porPagina, setPorPagina] = useState(9)

  const maximo = Math.ceil(location?.residents.length / porPagina)

  useEffect(()=>{

    let numberLocation
    if (searchInput === ''){
      numberLocation = Math.floor(Math.random() * 126)
    } else {
      numberLocation = searchInput
    }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
    .then(res => {
      setLocation(res.data)
      setLoading(false)
    })
    .catch( err => console.log("Error de Axios"))

  },[searchInput])

  //Search Input
  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.search.value)
  }

  //console.log(searchInput)
  //console.log(location)

  return (
    <div className="App">
      <header className='hero__header'>
        <form onSubmit={handleSubmit} className='header_'>
          <input id="search" className='inputSearch' type="number" placeholder='Consult of Location, here' />
        </form>
      </header>
      <LocationCard location={location}/>
      <div className='container_residents'>
        {
          location?.residents.slice(
            (pagina -1)* porPagina,
            (pagina -1) * porPagina + porPagina
          ).map(url=>(
          <Card_resident 
          key={url} url={url}
          />
          ))
        }
      </div>
      <div className='conteiner-Pagination'>
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo}/>
      </div>
      <Footer/>  
    </div>
  )
}

export default App
