import React, { useState, useEffect } from 'react';
import { API_URLS } from '../../apiUrls';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Document, PDFDownloadLink, View, Text, Page, StyleSheet } from "@react-pdf/renderer";

const Estados = [
    {
        name: 'Manos y/o pies hinchados',
        id: 'option1',
        options: ['FRECUENTE/M', 'MUY FRECUENTE/M', 'NUNCA', 'ANTES', 'A VECES'],
    },
    {
        name: 'Dolores en el vientre',
        id: 'option2',
        options: ['FRECUENTE/M', 'MUY FRECUENTE/M', 'NUNCA', 'ANTES', 'A VECES'],
    },
    {
        name: 'Dolores de cabeza y/o vómitos',
        id: 'option3',
        options: ['FRECUENTE/M', 'MUY FRECUENTE/M', 'NUNCA', 'ANTES', 'A VECES'],
    },
    {
        name: 'Fatiga y agotamiento',
        id: 'option4',
        options: ['FRECUENTE/M', 'MUY FRECUENTE/M', 'NUNCA', 'ANTES', 'A VECES'],
    },
    {
        name: 'Pérdida de vista u oído</label',
        id: 'option5',
        options: ['FRECUENTE/M', 'MUY FRECUENTE/M', 'NUNCA', 'ANTES', 'A VECES'],
    },
    {
        name: 'Dificultades para dormir',
        id: 'option6',
        options: ['FRECUENTE/M', 'MUY FRECUENTE/M', 'NUNCA', 'ANTES', 'A VECES'],
    },
    {
        name: 'Pesadillas o terrores nocturnos a que:',
        id: 'option7',
        options: ['FRECUENTE/M', 'MUY FRECUENTE/M', 'NUNCA', 'ANTES', 'A VECES'],
    },

    {
        name: 'Incontinencia (orina, heces)',
        id: 'option8',
        options: ['FRECUENTE/M', 'MUY FRECUENTE/M', 'NUNCA', 'ANTES', 'A VECES'],
    },
    {
        name: 'Tartamudeos al explicarse',
        id: 'option9',
        options: ['FRECUENTE/M', 'MUY FRECUENTE/M', 'NUNCA', 'ANTES', 'A VECES'],
    },
    {
        name: 'Miedos intensos ante cosas',
        id: 'option10',
        options: ['FRECUENTE/M', 'MUY FRECUENTE/M', 'NUNCA', 'ANTES', 'A VECES'],
    },
];


const Entrevista = ({ user }) => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const { register, handleSubmit, setValue } = useForm()
    const [data, setData] = useState([]);
    const [datos, setDatos] = React.useState(null);
    useEffect(() => {
        // Realiza la solicitud GET a la API
        axios.get(`${API_URLS.getAlumnos}${user}/`)
            .then(response => {
                setData(response.data);
                //obtiene los datos desde la api
                const nombreCompleto = `${response.data.nombre_alumno} ${response.data.apellido_paterno} ${response.data.apellido_materno}`;
                setValue('nombre', nombreCompleto);
                setValue('sexo', response.data.sexo);
                setValue('carrera', response.data.carrera);
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });

    }, [user, setValue]);


    //Guarda la opcion seleccionada de los ESTADOS PSICOFISIOLOGICOS
    const handleOptionChange = (optionName, value) => {
        setSelectedOptions({
            ...selectedOptions,
            [optionName]: value,
        });
    };

    //Boton Aceptar
    const onSubmit = (datos) => {
        console.log(datos)
        setDatos(datos);

    }

    //si selecciona una opcion, habilita un input para especificar
    const [tipoVivienda, setTipoVivienda] = useState('');
    const [tipoTrabajo, setTipoTrabajo] = useState('');
    const [tipoTrabajoPadre, setTipoTrabajoPadre] = useState('');
    const [tipoTrabajoMadre, setTipoTrabajoMadre] = useState('');
    const [prescripcion_medica, setPrescripcionMedica] = useState('');
    function handleChange(event) {
        setTipoVivienda(event.target.value);
    }

    function handleTrabajoChange(event, parent) {
        if (parent === 'alumno') {
            setTipoTrabajo(event.target.value);
        }
        else if (parent === 'padre') {
            setTipoTrabajoPadre(event.target.value);
        } else if (parent === 'madre') {
            setTipoTrabajoMadre(event.target.value);
        }
    }

    function handlePrescripcionMedica(event) {
        setPrescripcionMedica(event.target.value);
    }

    //Esta funcion permite agregar mas hermanos al formulario con un maximo de 10
    const [inputs, setInputs] = useState(['']);
    function handleInputChange(event, index) {
        const { value } = event.target;
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
    }

    function handleAddInput() {
        if (inputs.length < 10) {
            setInputs([...inputs, '']);
        }
    }

    //renderiza un input
    const FormInput = ({ id, label, register, required }) => {
        return (
            <div className="form-floating mb-3">
                <input
                    id={id}
                    name={id}
                    placeholder={id}
                    className="form-control"
                    type="text"
                    {...register(id, { required })}
                    required={required}
                />
                <label htmlFor={id} className='mx-1'>{label}</label>
            </div>
        );
    };

    return (

        //Formulario de preguntas
        <div className='col-8 mx-auto'>
            <form className='row g-3 p-2 ' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-floating mb-3 col-md-8 ">
                    <input className="form-control-plaintext mx-1" type="text" id='nombre'
                        defaultValue={`${data.nombre_alumno} ${data.apellido_paterno} ${data.apellido_materno}`}
                        {...register('nombre')}
                        disabled />
                    <label htmlFor="nombre" >Nombre</label>
                </div>

                <div className="form-floating mb-3 col-md-4">
                    <input className="form-control-plaintext  " type="text" placeholder='carrera' id="Carrera" defaultValue={data.carrera} {...register('carrera')} disabled />
                    <label htmlFor="Carrera" className='mx-1'>Carrera</label>
                </div>
                <div className="col-md-3">
                    <FormInput
                        id="estatura"
                        label="Estatura"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-3">
                    <FormInput
                        id="peso"
                        label="Peso"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <FormInput
                        id="Fecha"
                        label="Fecha de Nacimiento"
                        register={register}
                        required
                    />
                </div>

                <div className="form-floating mb-3 col-md-2">
                    <input id="Sexo" className="form-control-plaintext " type="text" {...register('sexo')} placeholder='sexo' defaultValue={data.sexo} disabled />
                    <label htmlFor="Sexo" className='mx-1'>Sexo</label>
                </div>

                <div className="col-md-2">
                    <FormInput
                        id="edad"
                        label="Edad"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-8">
                    <FormInput
                        id="estado_civil"
                        label="Estado Civil"
                        register={register}
                        required
                    />
                </div>

                <div className="form-floating mb-3 col-md-2">
                    <div className='mb-3'>
                        <label>Trabaja</label>
                        <select
                            className='form-select'
                            {...register('trabaja')}
                            value={tipoTrabajo}
                            onChange={(event) => handleTrabajoChange(event, 'alumno')}
                            required
                        >
                            <option value="No">No</option>
                            <option value="Si">Si</option>
                        </select>

                        {tipoTrabajo === 'Si' && (
                            <div className='mb-3 col-md-12 my-2'>
                                <label>Tipo de Trabajo:</label>
                                <input
                                    className='form-control'
                                    type='text'
                                    {...register('tipo_trabajo')}
                                    required
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className="col-md-10">
                    <FormInput
                        id="lugar_nacimiento"
                        label="Lugar de Nacimiento"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-12">
                    <FormInput
                        id="domicilio"
                        label="Domicilio Actual"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-4">
                    <FormInput
                        id="telefono"
                        label="Teléfono"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-2">
                    <FormInput
                        id="cp"
                        label="C. P"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <FormInput
                        id="email"
                        label="E-mail"
                        register={register}
                        required
                    />
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
                            <input className='form-control' type='text' {...register('la_casa_es_1')} required />
                        </div>
                    )}
                </div>


                <div className="col-md-7">
                    <FormInput
                        id="Numero"
                        label="Numero de personas con las que vives"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-5">
                    <FormInput
                        id="Parentesco"
                        label="Parentesco"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-10">
                    <FormInput
                        id="nombre_p"
                        label="Nombre del Padre"
                        register={register}
                        required
                    />
                </div>


                <div className="col-md-2">
                    <FormInput
                        id="edad_p"
                        label="Edad"
                        register={register}
                        required
                    />
                </div>

                <div className='col-md-4'>
                    <label>Trabaja</label>
                    <select
                        className='form-select'
                        {...register('trabaja_padre')}
                        value={tipoTrabajoPadre}
                        onChange={(event) => handleTrabajoChange(event, 'padre')}
                        required
                    >
                        <option value="No">No</option>
                        <option value="Si">Si</option>
                    </select>
                </div>

                {tipoTrabajoPadre === 'Si' && (
                    <div className='col-md-8'>
                        <label>Tipo de Trabajo:</label>
                        <input
                            className='form-control'
                            type='text'
                            {...register('tipo_trabajo_padre')}
                            required
                        />
                    </div>
                )}

                <div className="col-md-12">
                    <FormInput
                        id="Profesion_p"
                        label="Profesion"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-7">
                    <FormInput
                        id="Domicilio_p"
                        label="Domicilio"
                        register={register}
                        required
                    />
                </div >

                <div className="col-md-5">
                    <FormInput
                        id="Telefono_p"
                        label="Telefono"
                        register={register}
                        required
                    />
                </div>
                <div className="col-md-10">
                    <FormInput
                        id="nombre_m"
                        label="Nombre de la Madre"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-2">
                    <FormInput
                        id="edad_m"
                        label="Edad"
                        register={register}
                        required
                    />
                </div>

                <div className='col-md-4'>
                    <label>Trabaja</label>
                    <select
                        className='form-select'
                        {...register('trabaja_madre')}
                        value={tipoTrabajoMadre}
                        onChange={(event) => handleTrabajoChange(event, 'madre')}
                        required
                    >
                        <option value="No">No</option>
                        <option value="Si">Si</option>
                    </select>
                </div>

                {tipoTrabajoMadre === 'Si' && (
                    <div className='col-md-8'>
                        <label>Tipo de Trabajo:</label>
                        <input
                            className='form-control'
                            type='text'
                            {...register('tipo_trabajo_madre')}
                            required
                        />
                    </div>
                )}
                <div className='col-md-12'>
                    <FormInput
                        id="Profesion_m"
                        label="Profesion"
                        register={register}
                        required
                    />
                </div>

                <div className='col-md-7'>
                    <FormInput
                        id="Domicilio_m"
                        label="Domicilio"
                        register={register}
                        required
                    />
                </div>

                <div className='col-md-5'>
                    <FormInput
                        id="Telefono_m"
                        label="Telefono"
                        register={register}
                        required
                    />
                </div>


                <label>Nombre de tus hermanos por edad (del mayor al menor incluyéndote tú)</label>
                <div>
                    {inputs.map((input, index) => (
                        <div key={index} className="form-floating mb-3 row">
                            <div className="form-floating mb-3 col-md-4">
                                <input id='Nombre_h' className="form-control" type="text" placeholder='Hermano' onChange={(event) => handleInputChange(event, index)} {...register(`nombre_hermano${index + 1}`)} />
                                <label htmlFor="Nombre_h" className='mx-2'> Nombre: </label>
                            </div>
                            <div className="form-floating mb-3 col-md-4">
                                <input id="Fecha_h" className="form-control" type="text" placeholder='Hermano' onChange={(event) => handleInputChange(event, index)} {...register(`fecha_hermano${index + 1}`)} />
                                <label htmlFor="Fecha_h" className='mx-2'>Fecha de Nacimiento: </label>
                            </div>
                            <div className="form-floating mb-3 col-md-2">
                                <select id={`select-${index}`} className="form-select" onChange={(event) => handleInputChange(event, index)} {...register(`sexo_hermano${index + 1}`)}>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                </select>
                                <label htmlFor={`select-${index}`} className='mx-2'>Sexo: </label>
                            </div>
                            <div className="form-floating mb-3 col-md-2">
                                <input id="Estudios_h" className="form-control" type="text" placeholder='Hermano' onChange={(event) => handleInputChange(event, index)} {...register(`estudios_hermano${index + 1}`)} />
                                <label htmlFor="Estudios_h" className='mx-2'>Estudios: </label>
                            </div>
                        </div>

                    ))}
                    <button className="btn btn-dark mx-auto" type="button" onClick={handleAddInput}>Agregar Hermano</button>
                </div>

                <div className="form-floating mb-3 col-md-12">
                    <FormInput
                        id="ingresos"
                        label="A cuánto ascienden los ingresos mensuales de tu familia"
                        register={register}
                        required
                    />
                </div>

                <div className="form-floating mb-3 col-md-12">
                    <FormInput
                        id="ingresos_independiente"
                        label="En caso de ser económicamente independiente a cuanto asciende tu ingreso"
                        register={register}
                        required
                    />
                </div>

                <label>DONDE REALIZASTE TUS ESTUDIOS DE:</label>

                <div className="col-md-6">
                    <FormInput
                        id="Primaria"
                        label="Primaria"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <FormInput
                        id="Secundaria"
                        label="Secundaria"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <FormInput
                        id="Bachillerato"
                        label="Bachillerato"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <FormInput
                        id="Estudios_Superiores"
                        label="Estudios Superiores"
                        register={register}
                        required
                    />
                </div>

                <label>¿Cuenta con prescripción médica de alguna deficiencia sensorial o funcional que te obligue a
                    llevar aparatos o controlar tu actividad física? </label>
                <div className="form-floating mb-3 col-md-2">
                    <select className="form-select" {...register(`prescripcion_medica`)} value={prescripcion_medica} onChange={handlePrescripcionMedica}>
                        <option value="No">No</option>
                        <option value="Si">Si</option>
                    </select>
                </div>
                <div className="form-floating mb-3 col-md-10">
                    {prescripcion_medica === 'Si' && (
                        <div className=''>
                            <div className="form-check form-check-inline col-md-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="prescripcion"
                                    id="vista"
                                    value="vista"
                                    {...register("prescripcion", { required: true })}
                                />
                                <label className="form-check-label" htmlFor="oido">Vista</label>
                            </div>

                            <div className="form-check form-check-inline col-md-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="prescripcion"
                                    id="oido"
                                    value="oido"
                                    {...register("prescripcion", { required: true })}
                                />
                                <label className="form-check-label" htmlFor="oido">Oído</label>
                            </div>

                            <div className="form-check form-check-inline col-md-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="prescripcion"
                                    id="lenguaje"
                                    value="Lenguaje"
                                    {...register("prescripcion", { required: true })}
                                />
                                <label className="form-check-label" htmlFor="lenguaje">Lenguaje</label>
                            </div>

                            <div className="form-check form-check-inline col-md-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="prescripcion"
                                    id="otros"
                                    value="Otros"
                                    {...register("prescripcion", { required: true })}
                                />
                                <label className="form-check-label" htmlFor="otros">Otros</label>
                            </div>
                        </div>
                    )}
                </div>

                <label>ESTADO PSICOFISIOLOGICOS</label>
                <label>INDICADORES</label>

                {Estados.map((option, index) => (
                    <div key={index} className='form-floating mb-3 col-md-12'>
                        <div className='col-md-12'>
                            <label>{option.name}</label>
                        </div>

                        {option.options.map((optionLabel, optionIndex) => (
                            <div key={optionIndex} className="form-check form-check-inline col-md-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={option.id}
                                    id={`${option.id}-${optionIndex}`}
                                    value={optionLabel}
                                    onChange={() => handleOptionChange(option.id, optionLabel)} {...register(option.id)}
                                    required
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`${option.id}-${optionIndex}`}
                                >
                                    {optionLabel}
                                </label>
                            </div>
                        ))}
                    </div>
                ))}

                <div className="form-floating mb-3 col-md-12">
                    <FormInput
                        id="observaciones_higiene"
                        label="Observaciones de Higiene"
                        register={register}
                        required
                    />
                </div>

                <label>ÁREAS DE INTEGRACIÓN</label>
                <label>ÁREA FAMILIAR:</label>

                <div className="form-floating mb-3 col-md-12">
                    <FormInput
                        id="relacion_familiar"
                        label="¿Cómo es la relación con tu familia?"
                        register={register}
                        required
                    />
                </div>

                <div className='mb-3 col-md-4 my-2'>
                    <label>¿Existen dificultades?</label>
                    <select className='form-select' {...register('dificultades')} required>
                        <option value="No">No</option>
                        <option value="Si">Si</option>
                    </select>
                </div>

                <div className="col-md-8">
                    <FormInput
                        id="tipo_dificultades"
                        label="¿De qué tipo?"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-8">
                    <FormInput
                        id="actitud_familiar"
                        label="¿Qué actitud tienes con tu familia?"
                        register={register}
                        required
                    />
                </div>
                <label>EL PADRE</label>
                <div className="col-md-6">

                    <FormInput
                        id="relacion_padre"
                        label="¿Cómo te relacionas con tu Padre?"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <FormInput
                        id="actitud_padre"
                        label="¿Qué actitud tienes hacia tu Padre?"
                        register={register}
                        required
                    />
                </div>
                <label>LA MADRE</label>
                <div className="col-md-6">

                    <FormInput
                        id="relacion_madre"
                        label="¿Cómo te relacionas con tu Madre?"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <FormInput
                        id="actitud_madre"
                        label="¿Qué actitud tienes hacia tu Madre?"
                        register={register}
                        required
                    />
                </div>
                <label>HERMANOS: (Con cada uno de ellos)</label>
                <div>
                    {inputs.map((input, index) => (
                        <div key={index} className="form-floating mb-3 row">
                            <div className="form-floating mb-3 col-md-6">
                                <input id='Nombre_h' className="form-control" type="text" placeholder='Hermano' onChange={(event) => handleInputChange(event, index)} {...register(`relacion_hermano${index + 1}`)} />
                                <label htmlFor="Nombre_h" className='mx-2'> Relación </label>
                            </div>

                            <div className="form-floating mb-3 col-md-6">
                                <input id="Fecha_h" className="form-control" type="text" placeholder='Hermano' onChange={(event) => handleInputChange(event, index)} {...register(`actitud_hermano${index + 1}`)} />
                                <label htmlFor="Fecha_h" className='mx-2'>Actitud </label>
                            </div>
                        </div>

                    ))}
                </div>

                <div>
                    <div>
                        <label>¿Con quién te sientes más ligado afectivamente?</label>
                    </div>
                    <div className="form-check form-check-inline col-md-2">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="ligado_afectivamente"
                            id="Madre"
                            value="Madre"
                            {...register("ligado_afectivamente", { required: true })}
                        />
                        <label className="form-check-label" htmlFor="oido">Madre</label>
                    </div>

                    <div className="form-check form-check-inline col-md-2">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="ligado_afectivamente"
                            id="Padre"
                            value="Padre"
                            {...register("ligado_afectivamente", { required: true })}
                        />
                        <label className="form-check-label" htmlFor="oido">Padre</label>
                    </div>

                    <div className="form-check form-check-inline col-md-2">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="ligado_afectivamente"
                            id="Hermano"
                            value="Hermano"
                            {...register("ligado_afectivamente", { required: true })}
                        />
                        <label className="form-check-label" htmlFor="lenguaje">Hermano</label>
                    </div>

                    <div className="form-check form-check-inline col-md-2">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="ligado_afectivamente"
                            id="Otros"
                            value="Otros"
                            {...register("ligado_afectivamente", { required: true })}
                        />
                        <label className="form-check-label" htmlFor="otros">Otros</label>
                    </div>
                </div>

                <div className="col-md-4">
                    <FormInput
                        id="especifica_ligado"
                        label="Especifica por que"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-8">
                    <FormInput
                        id="ocupa_educacion"
                        label="¿Quién se ocupa más directamente de tu educación?"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-12">
                    <FormInput
                        id="decision_carrera"
                        label="¿Quién ha influido más en tu decisión para estudiar esta carrera?"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-12">
                    <FormInput
                        id="dato_familiar"
                        label="Consideras importante facilitar algún otro dato sobre tu ambiente familiar"
                        register={register}
                        required
                    />
                </div>

                <div>
                    <label>ÁREA SOCIAL:</label>
                    <div>
                        <label>¿Cómo es tu relación con los compañeros?</label>
                    </div>
                    <div className="form-check form-check-inline col-md-2">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="relacion_companeros"
                            id="Buena"
                            value="Buena"
                            {...register("relacion_companeros", { required: true })}
                        />
                        <label className="form-check-label" htmlFor="oido">Buena</label>
                    </div>

                    <div className="form-check form-check-inline col-md-2">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="relacion_companeros"
                            id="Regular"
                            value="Regular"
                            {...register("relacion_companeros", { required: true })}
                        />
                        <label className="form-check-label" htmlFor="oido">Regular</label>
                    </div>

                    <div className="form-check form-check-inline col-md-2">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="relacion_companeros"
                            id="Mala"
                            value="Mala"
                            {...register("relacion_companeros", { required: true })}
                        />
                        <label className="form-check-label" htmlFor="lenguaje">Mala</label>
                    </div>
                </div>

                <div className="col-md-6">
                    <FormInput
                        id="porque_companeros"
                        label="¿Por qué?"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <FormInput
                        id="relacion_amigos"
                        label="¿Cómo es tu relación con tus amigos?"
                        register={register}
                        required
                    />
                </div>

                <div className='col-md-3'>
                    <label>¿Tienes Pareja?</label>
                    <select
                        className='form-select'
                        {...register('tiene_pareja')}
                        required
                    >
                        <option value="No">No</option>
                        <option value="Si">Si</option>
                    </select>
                </div>

                <div className="col-md-9">
                    <FormInput
                        id="relacion_pareja"
                        label="¿Cómo es tu relación con tu pareja?"
                        register={register}
                    />
                </div>

                <div className="col-md-12">
                    <FormInput
                        id="relacion_profesores"
                        label="¿Cómo es tu relación con tus profesores?"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-12">
                    <FormInput
                        id="relacion_autoridades"
                        label="¿Cómo es tu relación con las autoridades académicas?"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <FormInput
                        id="tiempo_libre"
                        label="¿Qué haces en tu tiempo libre?"
                        register={register}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <FormInput
                        id="actividad_recreativa"
                        label="¿Cuál es tu actividad recreativa?"
                        register={register}
                        required
                    />
                </div>

                <div className="form-floating mb-3 col-md-12">
                    <button className="btn col-md-3 btn-dark">Aceptar</button>
                </div>


            </form>
            {datos && (
                <PDFDownloadLink
                    document={<GenerarPDF datos={datos} />}
                    fileName="Reporte.pdf"
                >
                    Descargar PDF
                </PDFDownloadLink>
            )}
        </div>


    )
}
//Funcion para generar el PDF
const GenerarPDF = ({ datos }) => {
    //Genera la tabla de hermanos
    const Hermanos = () => {
        const rows = [];
        for (let i = 1; i <= 10; i++) {
            rows.push(
                <View style={styles.tableRow} key={i}>
                    <View style={{ ...styles.tableCell, width: '5.2%' }}>
                        <Text style={{ ...styles.fuente, textAlign: 'center' }}>{i}</Text>
                    </View>
                    <View style={{ ...styles.tableCell, width: '37%' }}>
                        <Text style={{ ...styles.fuente, textAlign: 'center' }}>{datos['nombre_hermano' + i]}</Text>
                    </View>
                    <View style={{ ...styles.tableCell, width: '20%' }}>
                        <Text style={{ ...styles.fuente, textAlign: 'center' }}>{datos['fecha_hermano' + i]}</Text>
                    </View>
                    <View style={{ ...styles.tableCell, width: '20%' }}>
                        <Text style={{ ...styles.fuente, textAlign: 'center' }}>{datos['sexo_hermano' + i]}</Text>
                    </View>
                    <View style={{ ...styles.tableCell, width: '20%' }}>
                        <Text style={{ ...styles.fuente, textAlign: 'center' }}>{datos['estudios_hermano' + i]}</Text>
                    </View>
                </View>
            );
        }
        return rows;
    };
    //Genera La relacion con los Hermanos
    const RelacionHermanos = () => {
        const rows = [];
        for (let i = 1; i <= 10; i++) {
            rows.push(
                <View style={styles.tableRow} key={i}>
                    <View style={{ ...styles.tableCell, width: '5%' }}>
                        <Text style={{ ...styles.fuente, textAlign: 'center' }}>{i}</Text>
                    </View>
                    <View style={{ ...styles.tableCell, width: '45.3%' }}>
                        <Text style={{ ...styles.fuente, textAlign: 'center' }}>{datos['relacion_hermano' + i]}</Text>
                    </View>
                    <View style={{ ...styles.tableCell, width: '51%' }}>
                        <Text style={{ ...styles.fuente, textAlign: 'center' }}>{datos['actitud_hermano' + i]}</Text>
                    </View>
                </View>
            );
        }
        return rows;
    };
    //Genera la tabla de ESTADO PSICOFISIOLOGICOS
    const EstadosPsi = () => {
        const indicadores = ['Manos y/o pies hinchados', 'Dolores en el vientre', 'Dolores de cabeza y/o vómitos', 'Pérdida del equilibrio', 'Fatiga y agotamiento', 'Pérdida de vista u oído', 'Dificultades para dormir', 'Pesadillas o terrores nocturnos a que', 'Incontinencia (orina, heces)', 'Tartamudeos al explicarse', 'Miedos intensos ante cosas']
        const rows = [];
        for (let i = 1; i <= 10; i++) {
            rows.push(
                <View style={styles.tableRow} key={i}>
                    <View style={{ ...styles.tableCell, width: '50%' }}>
                        <Text style={{ ...styles.fuente }}>{indicadores[i]}</Text>
                    </View>
                    <View style={{ ...styles.tableCell, width: '51%' }}>
                        <Text style={{ ...styles.fuente, textAlign: 'center' }}>{datos['option' + i]}</Text>
                    </View>
                </View>
            );
        }
        return rows;
    };
    //Estilos del PDF
    const styles = StyleSheet.create({
        contenido: {
            display: 'table',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '10%',
            marginBottom: 'auto',
        },
        table: {
            display: 'table',
            width: '80%',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: 'black',
            marginLeft: 'auto',
            marginRight: 'auto',

            marginBottom: 'auto',
        },
        tableRow: {
            flexDirection: 'row',
        },
        tableCell: {
            marginTop: -1,
            marginRight: -1,
            width: '100%',
            borderStyle: 'solid',
            padding: 4,
            borderWidth: 1,
            borderColor: 'black'
        },
        fuente: {
            fontStyle: 'normal',
            lineHeight: '1.5px',
            fontSize: '11',
            fontWeight: 'bold',
        },


    })
    return (

        <Document>
            <Page size="A4" orientation="portrait">
                <View tyle={styles.contenido}>
                    <View style={{ ...styles.table, marginTop: '30%' }}>
                        <View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Nombre:</Text>
                                    <Text style={{ ...styles.fuente }}>{datos.nombre}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Estatura: {datos.estatura}</Text>
                                    <Text style={{ ...styles.fuente }}>Carrera: {datos.carrera}</Text>
                                </View>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>
                                        Peso: {datos.peso}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Fecha de Nacimiento: {datos.Fecha}</Text>
                                    <Text style={{ ...styles.fuente }}>Sexo: {datos.sexo}</Text>
                                </View>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>
                                        Edad: {datos.edad}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Estado civil:</Text>
                                    <Text style={{ ...styles.fuente }}>{datos.estado_civil}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Trabaja: {datos.trabaja}</Text>
                                    {datos.trabaja === 'Si' && <Text style={{ ...styles.fuente }}>Tipo de Trabajo: {datos.tipo_trabajo}</Text>}
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Lugar de Nacimiento: {datos.lugar_nacimiento}</Text>
                                    <Text style={{ ...styles.fuente }}>Domicilio Actual: {datos.domicilio}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Teléfono:</Text>
                                    <Text style={{ ...styles.fuente }}>{datos.telefono}</Text>
                                </View>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>C. P:</Text>
                                    <Text style={{ ...styles.fuente }}>{datos.cp}</Text>
                                </View>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>E-mail:</Text>
                                    <Text style={{ ...styles.fuente }}>{datos.email}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Tipo de Vivienda:</Text>
                                    <Text style={{ ...styles.fuente }}>{datos.tipo_vivienda}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>La casa o departamento donde vives es: {datos.la_casa_es}</Text>
                                    {datos.la_casa_es === 'Otros' && <Text style={{ ...styles.fuente }}>{datos.la_casa_es_1}</Text>}
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Numero de personas con las que vives: {datos.Numero}</Text>
                                    <Text style={{ ...styles.fuente }}>Parentesco: {datos.Parentesco}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Nombre del Padre: {datos.nombre_p}</Text>
                                    <Text style={{ ...styles.fuente }}>Edad: {datos.edad_p}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Trabaja: {datos.trabaja_padre} </Text>
                                    {datos.trabaja_padre === 'Si' && <Text style={{ ...styles.fuente }}>Tipo de Trabajo: {datos.tipo_trabajo_padre}</Text>}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
            <Page size="A4" orientation="portrait">
                <View tyle={styles.contenido}>
                    <View style={{ ...styles.table, marginTop: '10%' }}>
                        <View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Profesion:</Text>
                                    <Text style={{ ...styles.fuente }}>{datos.Profesion_p}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Domicilio: {datos.Domicilio_p}</Text>
                                    <Text style={{ ...styles.fuente }}>Telefono: {datos.Telefono_p}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Nombre de la Madre: {datos.nombre_m}</Text>
                                    <Text style={{ ...styles.fuente }}>Edad: {datos.edad_m}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Trabaja: {datos.trabaja_madre} </Text>
                                    {datos.trabaja_madre === 'Si' && <Text style={{ ...styles.fuente }}>Tipo de Trabajo: {datos.tipo_trabajo_madre}</Text>}
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Profesion:</Text>
                                    <Text style={{ ...styles.fuente }}>{datos.Profesion_m}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Domicilio: {datos.Domicilio_m}</Text>
                                    <Text style={{ ...styles.fuente }}>Telefono: {datos.Telefono_m}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Text style={{ ...styles.fuente, textAlign: 'center', marginTop: '4%' }}>Nombre de tus hermanos por edad (del mayor al menor incluyéndote tú)</Text>
                    <View style={{ ...styles.table }}>
                        <View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell, width: '42%' }}>
                                    <Text style={{ ...styles.fuente, textAlign: 'center' }}>Nombre</Text>
                                </View>
                                <View style={{ ...styles.tableCell, width: '20%' }}>
                                    <Text style={{ ...styles.fuente, textAlign: 'center' }}>Fecha de Nacimiento</Text>
                                </View>
                                <View style={{ ...styles.tableCell, width: '20%' }}>
                                    <Text style={{ ...styles.fuente, textAlign: 'center' }}>Sexo</Text>
                                </View>
                                <View style={{ ...styles.tableCell, width: '20%' }}>
                                    <Text style={{ ...styles.fuente, textAlign: 'center' }}>Estudios</Text>
                                </View>
                            </View>
                        </View>
                        <Hermanos />
                    </View>
                    <View style={{ ...styles.table, marginTop: '4%' }}>
                        <View style={styles.tableCell}>
                            <Text style={styles.fuente}>A cuánto ascienden los ingresos mensuales de tu familia: {datos.ingresos}</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.fuente}>En caso de ser económicamente independiente a cuanto asciende tu ingreso: {datos.ingresos_independiente}</Text>
                        </View>
                        <View>
                            <View style={styles.tableCell}>
                                <Text style={styles.fuente}>DONDE REALIZASTE TUS ESTUDIOS DE:</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.tableCell}>
                                <Text style={styles.fuente}>Primaria: {datos.Primaria}</Text>
                            </View>
                        </View>
                    </View>


                </View>
            </Page>
            <Page size="A4" orientation="portrait">
                <View style={styles.contenido}>
                    <View style={{ ...styles.table, marginTop: '4%' }}>
                        <View style={styles.tableCell}>
                            <Text style={styles.fuente}>Secundaria: {datos.Secundaria}</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.fuente}>Bachillerato: {datos.Bachillerato}</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.fuente}>Estudios Superiores: {datos.Estudios_Superiores}</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.fuente}>¿Cuenta con prescripción médica de alguna deficiencia sensorial o funcional que te obligue a llevar aparatos o controlar tu actividad física?: {datos.prescripcion_medica} </Text>
                            {datos.prescripcion_medica === 'Si' && <Text style={styles.fuente}>¿Indica cuáles?: {datos.prescripcion}</Text>}
                        </View>
                    </View>
                    <Text style={{ ...styles.fuente, textAlign: 'center', marginTop: '4%', fontWeight: 'bold' }}>ESTADO PSICOFISIOLOGICOS</Text>
                    <View style={{ ...styles.table }}>
                        <View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell, width: '50%' }}>
                                    <Text style={{ ...styles.fuente, textAlign: 'center' }}>INDICADORES</Text>
                                </View>
                                <View style={{ ...styles.tableCell, width: '51%' }}>
                                    <Text style={{ ...styles.fuente, textAlign: 'center' }}>ESTADO</Text>
                                </View>
                            </View>
                            <EstadosPsi />
                            <View style={{ ...styles.tableCell, marginTop: '2%' }}>
                                <Text style={{ ...styles.fuente }}>Observaciones de Higiene: {datos.observaciones_higiene}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ ...styles.table, marginTop: '4%' }}>
                        <View>
                            <View style={styles.tableRow}>

                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente, textAlign: 'center' }}>ÁREAS DE INTEGRACIÓN</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>ÁREA FAMILIAR:</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>¿Cómo es la relación con tu familia?: {datos.relacion_familiar}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>¿Existen dificultades?: {datos.dificultades}</Text>
                                    {datos.dificultades === 'Si' && <Text style={{ ...styles.fuente }}>¿De qué tipo? : {datos.tipo_dificultades}</Text>}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
            <Page size="A4" orientation="portrait">
                <View style={styles.contenido}>
                    <View style={{ ...styles.table, marginTop: '4%' }}>
                        <View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>¿Qué actitud tienes con tu familia?:  {datos.actitud_familiar}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>EL PADRE</Text>
                                    <Text style={{ ...styles.fuente }}>¿Cómo te relacionas con tu Padre?:  {datos.relacion_padre}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>¿Qué actitud tienes hacia tu Padre?:  {datos.actitud_padre}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>LA MADRE</Text>
                                    <Text style={{ ...styles.fuente }}>¿Cómo te relacionas con tu Madre?:  {datos.relacion_madre}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>¿Qué actitud tienes hacia tu Madre?:  {datos.actitud_madre}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Text style={{ ...styles.fuente, textAlign: 'center', marginTop: '4%' }}>HERMANOS: (Con cada uno de ellos)</Text>
                    <View style={{ ...styles.table }}>
                        <View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell, width: '50%' }}>
                                    <Text style={{ ...styles.fuente, textAlign: 'center' }}>Relación</Text>
                                </View>
                                <View style={{ ...styles.tableCell, width: '51%' }}>
                                    <Text style={{ ...styles.fuente, textAlign: 'center' }}>Actitud</Text>
                                </View>
                            </View>
                            <RelacionHermanos />
                        </View>
                    </View>
                    <View style={{ ...styles.table, marginTop:'4%' }}>
                        <View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>¿Con quién te sientes más ligado afectivamente?:</Text>
                                    <Text style={{ ...styles.fuente }}>{datos.ligado_afectivamente}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
            <Page size="A4" orientation="portrait">
                <View style={styles.contenido}>
                    <View style={{ ...styles.table }}>
                        <View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Especifica por que:</Text>
                                    <Text style={{ ...styles.fuente }}>{datos.especifica_ligado}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>¿Quién se ocupa más directamente de tu educación?:</Text>
                                    <Text style={{ ...styles.fuente }}>{datos.ocupa_educacion}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>¿Quién ha influido más en tu decisión para estudiar esta carrera?:
                                    </Text>
                                    <Text style={{ ...styles.fuente }}>{datos.decision_carrera}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Consideras importante facilitar algún otro dato sobre tu ambiente familiar:
                                    </Text>
                                    <Text style={{ ...styles.fuente }}>{datos.dato_familiar}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente,textAlign:'center' }}>ÁREA SOCIAL:
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>¿Cómo es tu relación con los compañeros?:
                                    </Text>
                                    <Text style={{ ...styles.fuente }}>{datos.relacion_companeros}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>¿Por qué?:
                                    </Text>
                                    <Text style={{ ...styles.fuente }}>{datos.porque_companeros}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>¿Cómo es tu relación con tus amigos?:
                                    </Text>
                                    <Text style={{ ...styles.fuente }}>{datos.relacion_amigos}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>¿Tienes Pareja?:
                                    </Text>
                                    <Text style={{ ...styles.fuente }}>{datos.tiene_pareja}</Text>
                                </View>
                                {datos.tiene_pareja === 'Si' &&                                 <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>¿Cómo es tu relación con tu pareja?:
                                    </Text>
                                    <Text style={{ ...styles.fuente }}>{datos.relacion_pareja}</Text>
                                </View>}
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>¿Cómo es tu relación con tus profesores?:
                                    </Text>
                                    <Text style={{ ...styles.fuente }}>{datos.relacion_profesores}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>¿Cómo es tu relación con las autoridades académicas?:
                                    </Text>
                                    <Text style={{ ...styles.fuente }}>{datos.relacion_autoridades}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>¿Qué haces en tu tiempo libre?:
                                    </Text>
                                    <Text style={{ ...styles.fuente }}>{datos.tiempo_libre}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>¿Cuál es tu actividad recreativa?:
                                    </Text>
                                    <Text style={{ ...styles.fuente }}>{datos.actividad_recreativa}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}



export default Entrevista