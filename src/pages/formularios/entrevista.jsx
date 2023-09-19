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


    const onSubmit = (datos) => {
        console.log(datos)
        console.log(datos.nombre_padre)
        console.log(datos.nombre_madre)
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
    const FormInput = ({ id, name, label, register, placeholder, required }) => {
        return (
            <div className="form-floating mb-3">
                <input
                    id={id}
                    className="form-control"
                    type="text"
                    {...register(name, { required })}
                    placeholder={placeholder}
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
                        name="estatura"
                        label="Estatura"
                        register={register}
                        placeholder="estatura"
                        required
                    />
                </div>

                <div className="col-md-3">
                    <FormInput
                        id="peso"
                        name="peso"
                        label="Peso"
                        register={register}
                        placeholder="peso"
                        required
                    />
                </div>

                <div className="col-md-6">
                    <FormInput
                        id="Fecha"
                        name="Fecha"
                        label="Fecha de Nacimiento"
                        register={register}
                        placeholder="Fecha"
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
                        name="edad"
                        label="Edad"
                        register={register}
                        placeholder="edad"
                        required
                    />
                </div>

                <div className="col-md-8">
                    <FormInput
                        id="estado_civil"
                        name="estado_civil"
                        label="Estado Civil"
                        register={register}
                        placeholder="estado_civil"
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

                <div className="col-md-9">
                    <FormInput
                        id="lugar_nacimiento"
                        name="lugar_nacimiento"
                        label="Lugar de Nacimiento"
                        register={register}
                        placeholder="lugar_nacimiento"
                        required
                    />
                </div>

                <div className="col-md-12">
                    <FormInput
                        id="domicilio"
                        name="domicilio"
                        label="Domicilio Actual"
                        register={register}
                        placeholder="domicilio"
                        required
                    />
                </div>

                <div className="col-md-4">
                    <FormInput
                        id="telefono"
                        name="telefono"
                        label="Teléfono"
                        register={register}
                        placeholder="telefono"
                        required
                    />
                </div>

                <div className="col-md-2">
                    <FormInput
                        id="cp"
                        name="cp"
                        label="C. P"
                        register={register}
                        placeholder="cp"
                        required
                    />
                </div>

                <div className="col-md-6">
                    <FormInput
                        id="email"
                        name="email"
                        label="E-mail"
                        register={register}
                        placeholder="email"
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
                        name="Numero"
                        label="Numero de personas con las que vives"
                        register={register}
                        placeholder="Numero"
                        required
                    />
                </div>

                <div className="col-md-5">
                    <FormInput
                        id="Parentesco"
                        name="Parentesco"
                        label="Parentesco"
                        register={register}
                        placeholder="Parentesco"
                        required
                    />
                </div>

                <div className="col-md-10">
                    <FormInput
                        id="nombre_p"
                        name="nombre_p"
                        label="Nombre del Padre"
                        register={register}
                        placeholder="nombre_p"
                        required
                    />
                </div>


                <div className="col-md-2">
                    <FormInput
                        id="edad_p"
                        name="edad_p"
                        label="Edad"
                        register={register}
                        placeholder="edad_padre"
                        required
                    />
                </div>

                <div className='mb-3 col-md-4 my-2'>
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
                    <div className='mb-3 col-md-12 my-2'>
                        <label>Tipo de Trabajo:</label>
                        <input
                            className='form-control'
                            type='text'
                            {...register('tipo_trabajo_padre')}
                            required
                        />
                    </div>
                )}
                <div className="form-floating mb-3 col-md-5"></div>

                <FormInput
                    id="Profesion_p"
                    name="profesion_padre"
                    label="Profesion"
                    register={register}
                    placeholder="profesion_padre"
                    required
                />
                <div className="form-floating mb-3 col-md-5">

                </div>
                <FormInput
                    id="Domicilio_p"
                    name="domicilio_padre"
                    label="Domicilio"
                    register={register}
                    placeholder="domicilio_padre"
                    required
                />
                <div className="form-floating mb-3 col-md-5">
                    <FormInput
                        id="Telefono_m"
                        name="telefono_padre"
                        label="Telefono"
                        register={register}
                        placeholder="telefono_padre"
                        required
                    />
                </div>
                {/*   <div className="form-floating mb-3 col-md-5">
                    <FormInput
                        id="nombre_m"
                        name="nombre_m"
                        label="Nombre de la Madre"
                        register={register}
                        placeholder="nombre_m"
                        required
                    />
                </div>

                <div className="form-floating mb-3 col-md-5">
                    <FormInput
                        id="edad_m"
                        name="edad_m"
                        label="Edad"
                        register={register}
                        placeholder="edad_madre"
                        required
                    />
                </div>

                <div className='mb-3 col-md-4 my-2'>
                    <label>Trabaja</label>
                    <select
                        className='form-select'
                        value={tipoTrabajoMadre}
                        onChange={(event) => handleTrabajoChange(event, 'madre')}
                        required
                    >
                        <option value="No">No</option>
                        <option value="Si">Si</option>
                    </select>
                </div>

                {tipoTrabajoMadre === 'Si' && (
                    <div className='mb-3 col-md-12 my-2'>
                        <label>Tipo de Trabajo:</label>
                        <input
                            className='form-control'
                            type='text'
                            {...register('tipo_trabajo_madre')}
                            required
                        />
                    </div>
                )}

                <FormInput
                    id="Profesion_m"
                    name="profesion_madre"
                    label="Profesion"
                    register={register}
                    placeholder="profesion_madre"
                    required
                />

                <FormInput
                    id="Domicilio_m"
                    name="domicilio_madre"
                    label="Domicilio"
                    register={register}
                    placeholder="domicilio_madre"
                    required
                />

                <FormInput
                    id="Telefono_m"
                    name="telefono_madre"
                    label="Telefono"
                    register={register}
                    placeholder="telefono_madre"
                    required
                />

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

                <div className="form-floating mb-3 col-md-5">
                    <FormInput
                        id="ingresos"
                        name="ingresos"
                        label="A cuánto ascienden los ingresos mensuales de tu familia"
                        register={register}
                        placeholder="ingresos"
                        required
                    />
                </div>

                <div className="form-floating mb-3 col-md-7">
                    <FormInput
                        id="ingresos_independiente"
                        name="ingresos_independiente"
                        label="En caso de ser económicamente independiente a cuanto asciende tu ingreso"
                        register={register}
                        placeholder="ingresos_independiente"
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
                        name="observaciones_higiene"
                        label="Observaciones de Higiene"
                        register={register}
                        placeholder="observaciones_higiene"
                        required
                    />
                </div>

                <label>ÁREAS DE INTEGRACIÓN</label>
                <label>ÁREA FAMILIAR:</label>

                <div className="form-floating mb-3 col-md-12">
                    <FormInput
                        id="relacion_familiar"
                        name="relacion_familiar"
                        label="¿Cómo es la relación con tu familia?"
                        register={register}
                        placeholder="relacion_familiar"
                        required
                    />
                </div> */}

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
const GenerarPDF = ({ datos }) => {
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
            marginTop: '30%',
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
            fontSize: '12',
            fontWeight: 'bold',
        },
    })
    return (
        <Document>
            <Page size="A4" orientation="portrait">
                <View tyle={styles.contenido}>
                    <View style={styles.table}>
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
                                    <Text style={{ ...styles.fuente }}>La casa o departamento donde vives es:</Text>
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
                    <View style={styles.table}>
                        <View>
                            <View style={styles.tableRow}>
                                <View style={{ ...styles.tableCell }}>
                                    <Text style={{ ...styles.fuente }}>Profesion:</Text>
                                    <Text style={{ ...styles.fuente }}>{datos.profesion_padre}</Text>
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