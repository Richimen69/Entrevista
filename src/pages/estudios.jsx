import React, { useState } from 'react';
import axios from 'axios';
import { API_URLS } from '../apiUrls';
import 'bootstrap/dist/css/bootstrap.min.css';


const MostrarEstudios = () => {
    const [data, setData] = useState([]);
    axios.get(API_URLS.getAlumnos)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });

    return (
        <div className="col-6 justify-content-center mx-auto">
            <table className="table">
                <tbody>
                    <tr>
                        <td>Tutorado: {data.nombre_alumno}</td>
                    </tr>
                    <tr>
                        <td>Periodo: {data.reticula}</td>
                    </tr>
                    <tr>
                        <td>Carrera: {data.carrera}</td>
                    </tr>
                </tbody>
            </table>
            <table className='table table-hover table-bordered'>
                <thead>
                    <tr>
                        <th scope="col" className="text-center align-middle">Estudio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center align-middle">Entrevista</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default MostrarEstudios
