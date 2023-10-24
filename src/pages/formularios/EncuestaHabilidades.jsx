
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { useForm } from "react-hook-form"
import { EncuestaOrg } from "./Elementos"
import EncuesteHabilidadesPDF from "./EncuestaHabilidadesPDF"
import {
    PDFDownloadLink,
} from "@react-pdf/renderer"

const EncuestaHabilidades = () => {
    const { register, handleSubmit } = useForm()
    const [selectedOptions, setSelectedOptions] = useState({})
    const [datos, setDatos] = React.useState(null)
    const handleOptionChange = (optionName, value) => {
        setSelectedOptions({
            ...selectedOptions,
            [optionName]: value,
        });
    };
    const onSubmit = (datos) => {
        console.log(datos)
        setDatos(datos)
    }
    
    return (
        <div className="col-10 mx-auto">
            <form className="row g-3 p-2 " onSubmit={handleSubmit(onSubmit)}>
                <label className="fw-bold">ENCUESTA SOBRE LAS HABILIDADES DE ESTUDIO</label>
                <label>Instrucciones: La presente encuesta está formada por tres breves cuestionarios, en los cuales
                    puedes indicar los problemas referentes a organización, técnicas y motivación en el estudio,
                    que quizá perjudican tu rendimiento académico. Si contestas todas las preguntas con
                    sinceridad y reflexión podrás identificar mucho de tus actuales defectos al estudiar.
                    Cada cuestionario contiene veinte preguntas, a las que se contestará con sí o no. No hay
                    respuestas "correctas" o "incorrectas", ya que la contestación adecuada es tu juicio sincero
                    sobre tu modo de actuar y tus actitudes personales, respecto al estudio.
                    Responde tan rápido como puedas, Pero sin caer en el descuido, y no dediques demasiado
                    tiempo a una sola pregunta. No omitas ninguna de ellas.
                </label>
                <label className="fw-bold">ENCUESTA PARA ORGANIZACIÓN DEL ESTUDIO</label>
                {EncuestaOrg.map((option, index) => (
                    <div key={index} className="form-floating mb-3 col-md-12">
                        <div className="col-md-12">
                            <label>{option.name}</label>
                        </div>

                        {option.options.map((optionLabel, optionIndex) => (
                            <div
                                key={optionIndex}
                                className="form-check form-check-inline col-md-2"
                            >
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={option.id}
                                    id={`${option.id}-${optionIndex}`}
                                    value={optionLabel}
                                    onChange={() => handleOptionChange(option.id, optionLabel)}
                                    {...register(option.id)}
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
                    <button className="btn col-md-3 btn-dark">Aceptar</button>
                </div>
            </form>
            {datos && (
                <PDFDownloadLink
                    document={<EncuesteHabilidadesPDF datos={datos} />}
                    fileName="Reporte.pdf"
                >
                    Descargar PDF
                </PDFDownloadLink>
            )}
        </div>

    )

}

export default EncuestaHabilidades