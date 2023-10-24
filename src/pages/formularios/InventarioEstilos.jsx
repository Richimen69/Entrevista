import React, { useState, useEffect } from "react"
import { API_URLS } from "../../apiUrls";
import "bootstrap/dist/css/bootstrap.min.css"
import { useForm } from "react-hook-form"
import axios from "axios"
import { FormInput, RaidioOpciones } from "./Elementos";

const InventarioEstilos = ({ user }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // Realiza la solicitud GET a la API
        axios.get(`${API_URLS.getAlumnos}${user}/`)
            .then(response => {
                setData(response.data)

            })
            .catch(error => {
                console.error('Error al obtener los datos:', error)
            });

    }, [user]);

    const { register, handleSubmit } = useForm()
    const [datos, setDatos] = React.useState(null)

    const onSubmit = (datos) => {
        console.log(datos)
        setDatos(datos)
    }

    return (
        <div className="col-10 mx-auto">
            <form className="row g-3 p-2 " onSubmit={handleSubmit(onSubmit)}>
                <label className="col-md-6">Nombre: {data.nombre_alumno} {data.apellido_paterno} {data.apellido_materno}</label>
                <label className="col-md-6">Carrera: {data.carrera}</label>

                <div className="col-md-12">
                    <FormInput
                        id="lugar"
                        label="Lugar de procedencia"
                        register={register}
                        required
                    />
                </div>
                <label>Este inventario es para ayudarle a descubrir su manera preferida de aprender. Cada persona
                    tiene su manera preferida de aprender. Reconocer sus preferencias le ayudará a comprender
                    sus fuerzas en cualquier situación de aprendizaje.<br />
                    Por favor, responda Ud. verdaderamente a cada pregunta. Responda Ud. según lo que hace
                    actualmente, no según lo que piense que sea la respuesta correcta.<br />
                    Use Ud. la escala siguiente para responder a cada pregunta.
                    respuesta. <br />
                    1 = Nunca <br />
                    2 = Raramente <br />
                    3 = Ocasionalmente <br />
                    4 = Usualmente <br />
                    5 = Siempre
                </label>

                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="1.- Me ayuda trazar o escribir a mano las palabras cuando tengo que aprenderlas de
                    memoria"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="2.- Recuerdo mejor un tema al escuchar una conferencia en vez de leer un libro de
                    texto"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="3.- Prefiero las clases que requieren una prueba sobre lo que se lee en el libro de
                    texto "
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="4.-  Me gusta comer bocados y mascar chicle, cuando estudio"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="5.- Al prestar atención a una conferencia, puedo recordar las ideas principales sin
                    anotarlas"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="6.- Prefiero las instrucciones escritas sobre las orales"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="7.- Yo resuelvo bien los rompecabezas y los laberintos"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="8.- Prefiero las clases que requieran una prueba sobre lo que se presenta durante
                    una conferencia"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="9.- Me ayuda ver diapositivas y videos para comprender un tema"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="10.- Recuerdo más cuando leo un libro que cuando escucho una conferencia"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="11.- Por lo general, tengo que escribir los números del teléfono para recordarlos bien"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="12.- Prefiero recibir las noticias escuchando la radio en vez de leerlas en un periódico "
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="13.- Me gusta tener algo como un bolígrafo o un lápiz en la mano cuando estudio"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="14.- Necesito copiar los ejemplos de la pizarra del maestro para examinarlos más
                    tarde"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="15.- Prefiero las instrucciones orales del maestro a aquellas escritas en un examen o
                    en la pizarra"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="16.- Prefiero que un libro de texto tenga diagramas gráficos y cuadros porque me
                    ayudan mejor a entender el material"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="17.- Me gusta escuchar música al estudiar una obra, novela, etc. "
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="18.- Tengo que apuntar listas de cosas que quiero hacer para recordarlas"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="19.- Puedo corregir mi tarea examinándola y encontrando la mayoría de los errores"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="20.- Prefiero leer el periódico en vez de escuchar las noticias"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="21.-  Puedo recordar los números de teléfono cuando los oigo"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="22.- Gozo el trabajo que me exige usar la mano o herramientas"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="23.- Cuando escribo algo, necesito leerlo en voz alta para oír como suena"
                />
                                <RaidioOpciones
                    id="impiden_estudiar"
                    register={register}
                    label="24.- Puedo recordar mejor las cosas cuando puedo moverme mientras estoy
                    aprendiéndolas, por ej. caminar al estudiar, o participar en una actividad que me
                    permita moverme, etc."
                />
                <div className="form-floating mb-3 col-md-12">
                    <button className="btn col-md-3 btn-dark">Aceptar</button>
                </div>
            </form>
        </div>


    )
}
export default InventarioEstilos