import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URLS } from '../apiUrls';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi2";

const Mostrar = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // Realiza la solicitud GET a la API
        axios.get(API_URLS.getTutorado)
            .then(response => {
                setData(response.data); 
                
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
            
    }, []);

    return (  
        <div className="col-6 justify-content-center mx-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Numero de control</th>
                        <th scope="col">Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {data.map(item => (
                        <tr key={item.numero_control}>
                            <td>{item.numero_control}</td>
                            <td>{item.nombre} {item.apellidos}</td>
                            <td>
                                <Link to={`/estudios/${item.ID_Grupo}/${item.nombre} ${item.apellidos}`}>
                                    <button type="button" className="btn btn-info">
                                        <HiChevronRight/>
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Mostrar;