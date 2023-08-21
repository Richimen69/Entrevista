import React, { useState } from 'react';
import axios from 'axios';
import { API_URLS } from '../apiUrls';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';


const MostrarEstudios = () => {
    const { idgrupo, nombre } = useParams(); //obtiene los valores del nombre y ID_Grupo
    const [data, setData] = useState([]);
    axios.get(`${API_URLS.getGrupo}${idgrupo}/`)
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
                        <td>Tutorado: {nombre}</td>
                    </tr>
                    <tr>
                        <td>Periodo: {data.periodo}</td>
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
