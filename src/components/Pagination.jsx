import React from 'react'
import { useState } from 'react'

const Pagination = ({ pagina, setPagina, maximo }) => {

    const [input, setInput] = useState(1)

    const nextPage = () => {
        if (pagina + 1 <= maximo) {
            setPagina(pagina + 1)
        } else {
            setPagina(1)
        }
    }
    const previusPage = () => {
        if (pagina - 1 >= 1) {
            setPagina(pagina - 1)
        } else {
            setPagina(maximo)
        }
    }

    const onChange = e => {

        if (inputValue >= 1 && inputValue <= maximo && !isNaN(inputValue)) {

            setInput(e.target.value)
        }
    }

    return (
        <div className='pagination'>
            <button  className='btn-left' onClick={previusPage}>Prev</button>
            <input onChange={e => onChange(e)}
                name="page"
                autoComplete='off'
                value={pagina}
                type="text" />
            <button className='btn-rigth'onClick={nextPage}>Next</button>
        </div>
    )
}

export default Pagination