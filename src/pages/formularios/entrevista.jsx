import React, { useState, useEffect } from 'react';
import { API_URLS } from '../../apiUrls';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Entrevista = ({ user }) => {
    const { register, handleSubmit, setValue } = useForm()
    const [data, setData] = useState([]);
    useEffect(() => {
        // Realiza la solicitud GET a la API
        axios.get(`${API_URLS.getAlumnos}${user}/`)
            .then(response => {
                setData(response.data);
                const nombreCompleto = `${response.data.nombre_alumno} ${response.data.apellido_paterno} ${response.data.apellido_materno}`;
            setValue('nombre', nombreCompleto); //obtiene el nombre desde la api
            setValue('sexo', response.data.sexo);
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });

    }, [user, setValue]);
    
    const onSubmit = (datos) => {
        console.log(datos)
    }

    //si selecciona una opcion, habilita un input para especificar
    const [tipoVivienda, setTipoVivienda] = useState('');
    const [tipoTrabajo, setTipoTrabajo] = useState('');
    const [tipoTrabajoPadre, setTipoTrabajoPadre] = useState('');
    const [tipoTrabajoMadre, setTipoTrabajoMadre] = useState('');
    function handleChange(event) {
        setTipoVivienda(event.target.value);
    }

    function handleTrabajoChange(event) {
        setTipoTrabajo(event.target.value);
    }

    function handleTrabajoPadreChange(event) {
        setTipoTrabajoPadre(event.target.value);
    }

    function handleTrabajoMadreChange(event) {
        setTipoTrabajoMadre(event.target.value);
    }

    return (

        //Formulario de preguntas
        <div className='col-8 mx-auto'>
            <form className='row g-3 p-2 ' onSubmit={handleSubmit(onSubmit)}>

                <div class="form-floating mb-3 col-md-8 ">
                    <input  className="form-control-plaintext mx-1" type="text" id='nombre'
                            defaultValue={`${data.nombre_alumno} ${data.apellido_paterno} ${data.apellido_materno}`}
                            {...register('nombre')}
                            />
                    <label for="nombre" >Nombre</label>
                </div>

                <div class="form-floating mb-3 col-md-4">
                    <input className="form-control " type="text" placeholder='carrera'  id="input" {...register('carrera')} required/>
                    <label for="input" className='mx-1'>Carrera</label>
                </div>

                <div class="form-floating mb-3 col-md-3">
                    <input id="input" className="form-control" type="text" {...register('estatura')} placeholder='Estatura' required />
                    <label for="input" className='mx-1'>Estatura</label>
                </div>

                <div class="form-floating mb-3 col-md-3">
                    <input id="input" className="form-control " type="text" {...register('peso')} placeholder='peso' required />
                    <label for="input" className='mx-1'>Peso</label>
                </div>

                <div class="form-floating mb-3 col-md-6">
                    <input id="input" className="form-control " type="text" {...register('fecha')} placeholder='fecha' required />
                    <label for="input" className='mx-1'>Fecha de Nacimiento</label>
                </div>

                <div class="form-floating mb-3 col-md-2">
                    <input id="input" className="form-control-plaintext " type="text" {...register('sexo')} placeholder='sexo' value={data.sexo} required />
                    <label for="input" className='mx-1'>Sexo</label>
                </div>

                <div class="form-floating mb-3 col-md-2">
                    <input id="input" className="form-control " type="text" {...register('edad')} placeholder='edad' required />
                    <label for="input" className='mx-1'>Edad</label>
                </div>

                <div class="form-floating mb-3 col-md-8">
                    <input id="input" className="form-control " type="text" {...register('estado_civil')} placeholder='Estado Civil' required />
                    <label for="input" className='mx-1'>Estado Civil</label>
                </div>

                <div className='mb-3 col-md-3 my-2'>
                    <label>Trabaja</label>
                    <select className='form-select' value={tipoTrabajo}  {...register('trabaja')} onChange={handleTrabajoChange} required>
                        <option value="No" selected>No</option>
                        <option value="Si">Si</option>
                    </select>
                    {tipoTrabajo === 'Si' && (
                        <div className='mb-3 col-md-12 my-2'>
                            <label>Especifica:</label>
                            <input className='form-control' type='text' {...register('tipo_trabajo')} required/>
                        </div>
                    )}
                </div>

                <div class="form-floating mb-3 col-md-9">
                    <input id="input" className="form-control" type="text" {...register('lugar_nacimiento')} placeholder='lugar' required />
                    <label for="input" className='mx-1'>Lugar de Nacimiento</label>
                </div>

                <div class="form-floating mb-3 col-md-12">
                    <input id="input" className="form-control" type="text" {...register('domicilio')} placeholder='domicilio' required />
                    <label for="input" className='mx-1'>Domicilio Actual</label>
                </div>

                <div class="form-floating mb-3 col-md-4">
                    <input id="input" className="form-control" type="text" {...register('telefono')} placeholder='telefono' required />
                    <label for="input" className='mx-1'>Teléfono</label>
                </div>

                <div class="form-floating mb-3 col-md-2">
                    <input id="input" className="form-control" type="text" {...register('cp')} placeholder='cp' required />
                    <label for="input" className='mx-1'>C. P</label>
                </div>

                <div class="form-floating mb-3 col-md-6">
                    <input id="input" className="form-control" type="email" {...register('email')} placeholder='email' required />
                    <label for="input" className='mx-1'>E-mail</label>
                </div>

                <div className='mb-3 col-md-4 my-2'>
                    <label>Tipo de Vivienda</label>
                    <select className='form-select' {...register('tipo_vivienda')} required>
                        <option value="Casa">Casa</option>
                        <option value="Departamento">Departamento</option>
                    </select>
                </div>

                <div className='mb-3 col-md-8 my-2'>
                    <label>La casa o departamento donde vives es:</label>
                    <select className='form-select' {...register('la_casa_es')} value={tipoVivienda} onChange={handleChange} required  >
                        <option value="Propia">Propia</option>
                        <option value="Rentada">Rentada</option>
                        <option value="Prestada">Prestada</option>
                        <option value="Otros">Otros</option>
                    </select>
                    {tipoVivienda === 'Otros' && (
                        <div className='mb-3 col-md-8 my-2'>
                            <label>Especifica:</label>
                            <input className='form-control' type='text' {...register('la_casa_es_1')} required/>
                        </div>
                    )}
                </div>

                <div class="form-floating mb-3 col-md-7">
                    <input id="input" className="form-control" type="text" {...register('total_personas')} placeholder='total_personas' required />
                    <label for="input" className='mx-1'>Numero de personas con las que vives</label>
                </div>

                <div class="form-floating mb-3 col-md-5">
                    <input id="input" className="form-control" type="text" {...register('parentesco')} placeholder='parentesco' required />
                    <label for="input" className='mx-1'>Parentesco</label>
                </div>


                <div class="form-floating mb-3 col-md-10">
                    <input id="input" className="form-control" type="text" {...register('nombre_padre')} placeholder='nombre_padre' required />
                    <label for="input" className='mx-1'>Nombre del Padre</label>
                </div>

                <div class="form-floating mb-3 col-md-2">
                    <input id="input" className="form-control" type="text" {...register('edad_padre')} placeholder='edad_padre' required />
                    <label for="input" className='mx-1'>Edad</label>
                </div>

                <div className='mb-3 col-md-4 my-2'>
                    <label>Trabaja</label>
                    <select className='form-select' value={tipoTrabajoPadre}  {...register('trabaja_padre')} onChange={handleTrabajoPadreChange} required>
                        <option value="No" selected>No</option>
                        <option value="Si">Si</option>
                    </select>
                    {tipoTrabajoPadre === 'Si' && (
                        <div className='mb-3 col-md-12 my-2'>
                            <label>Tipo de Trabajo:</label>
                            <input className='form-control' type='text' {...register('tipo_trabajo_padre')} required/>
                        </div>
                    )}
                </div>

                <div class="form-floating mb-3 col-md-8">
                    <input id="input" className="form-control" type="text" {...register('profesion_padre')} placeholder='profesion_padre' required />
                    <label for="input" className='mx-1'>Profesion</label>
                </div>

                <div class="form-floating mb-3 col-md-12">
                    <input id="input" className="form-control" type="text" {...register('domicilio_padre')} placeholder='domicilio_padre' required />
                    <label for="input" className='mx-1'>Domicilio </label>
                </div>

                <div class="form-floating mb-3 col-md-12">
                    <input id="input" className="form-control" type="text" {...register('telefono_padre')} placeholder='telefono_padre' required />
                    <label for="input" className='mx-1'>Telefono </label>
                </div>

                <div class="form-floating mb-3 col-md-10">
                    <input id="input" className="form-control" type="text" {...register('nombre_madre')} placeholder='nombre_madre' required />
                    <label for="input" className='mx-1'>Nombre del Madre</label>
                </div>

                <div class="form-floating mb-3 col-md-2">
                    <input id="input" className="form-control" type="text" {...register('edad_madre')} placeholder='edad_madre' required />
                    <label for="input" className='mx-1'>Edad</label>
                </div>

                <div className='mb-3 col-md-4 my-2'>
                    <label>Trabaja</label>
                    <select className='form-select' value={tipoTrabajoMadre}  {...register('trabaja_madre')} onChange={handleTrabajoMadreChange} required>
                        <option value="No" selected>No</option>
                        <option value="Si">Si</option>
                    </select>
                    {tipoTrabajoMadre === 'Si' && (
                        <div className='mb-3 col-md-12 my-2'>
                            <label>Tipo de Trabajo:</label>
                            <input className='form-control' type='text' {...register('tipo_trabajo_madre')} required/>
                        </div>
                    )}
                </div>

                <div class="form-floating mb-3 col-md-8">
                    <input id="input" className="form-control" type="text" {...register('profesion_madre')} placeholder='profesion_madre' required />
                    <label for="input" className='mx-1'>Profesion</label>
                </div>

                <div class="form-floating mb-3 col-md-12">
                    <input id="input" className="form-control" type="text" {...register('domicilio_madre')} placeholder='domicilio_madre' required />
                    <label for="input" className='mx-1'>Domicilio </label>
                </div>

                <div class="form-floating mb-3 col-md-12">
                    <input id="input" className="form-control" type="text" {...register('telefono_madre')} placeholder='telefono_madre' required />
                    <label for="input" className='mx-1'>Telefono </label>
                </div>

                <button className="btn btn-dark">Aceptar</button>

            </form>
        </div>
    )
}
export default Entrevista