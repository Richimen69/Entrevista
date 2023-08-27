import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Buscar = ({ setUser }) => {
    const [numero_control, setNumero] = useState("")
    const [error, setError] = useState(false)
    
    const handleSubmit = (e) =>{    
        e.preventDefault()   
        if( numero_control === "" ){
            setError(true)
            return 
        }
        setError(false)
        setUser([numero_control])
    }

    return (
        <div className='container py-5'>
            <form className='buscador container py-5 d-flex'
            onSubmit={handleSubmit}>
                <input className="form-control mx-2" type="text" placeholder="Numero de control" value={numero_control} onChange={e => setNumero(e.target.value)}></input>
                <button className="btn btn-dark">Aceptar</button>
            </form>       
            {error && <p>Introduce el Numero de control</p>}           
        </div>
    )
}
export default Buscar