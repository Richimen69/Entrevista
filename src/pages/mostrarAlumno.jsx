import React, { useState, useEffect } from 'react';
import { API_URLS } from '../apiUrls';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate  } from "react-router-dom";

const Mostrar = ({ user }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // Realiza la solicitud GET a la API
        axios.get(`${API_URLS.getAlumnos}${user}/`)
            .then(response => {
                setData(response.data);

            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });

    }, [user]);

    const navigate = useNavigate();

    function click(ruta) {
      navigate(ruta);
    }
    return (
        <div className='col-6 justify-content-center mx-auto'>
            <table className="table">
                <tbody>
                    <tr>
                        <td>Tutorado: {data.nombre_alumno} {data.apellido_paterno} {data.apellido_materno}</td>
                    </tr>
                    <tr>
                        <td>Numero de Control: {data.no_de_control}</td>
                    </tr>
                    <tr>
                        <td>Periodo: {data.ultimo_periodo_inscrito}</td>
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
                        <td className="text-center align-middle" onClick={() => click('/entrevista')}>
                            Entrevista
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center align-middle" onClick={() => click('/analisisFoda')}>
                            Análisis Foda
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center align-middle">
                            Encuesta sobre las habilidades de estudio
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Mostrar