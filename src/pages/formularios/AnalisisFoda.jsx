import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { Input } from "./Elementos";

const AnalisisFoda = () => {
    const { register, handleSubmit } = useForm();
    const [datos, setDatos] = React.useState(null);

    const onSubmit = (datos) => {
        console.log(datos);
        setDatos(datos);
    };
    return (
        <div className="col-10 mx-auto">
            <form className="row g-3 p-2 " onSubmit={handleSubmit(onSubmit)}>
                <label className="fw-bold">PASO 1: INTROSPECCIÓN. Fortalezas.</label>
                <label className="fw-bold">OBJETIVO:</label>
                <label>Identifique lo que tiene que construir en el siguiente capítulo de tu vida. Tome conciencia de
                    qué recursos, capacidades y cualidades conforman tus fortalezas principales.</label>
                <label className="fw-bold">INSTRUCCIONES:</label>
                <label>
                    1. Conviértete en “observador desapegado” y revisa tu línea de vida. <br />
                    2. Contesta las siguientes preguntas y escribe tus respuestas en los espacios
                    destinados para ello.<br />
                    Revisa la línea de vida y observa aquellos momentos en los cuales experimentaste los
                    mayores éxitos o victorias.
                </label>
                <div className="col-md-12">
                    <Input
                        id="talentos"
                        label="¿Qué talentos especiales sacaste a relucir en dichos
                        momentos? Identifica cuáles son tus mayores talentos. Estos pueden ser habilidades o
                        competencias. Escríbelos aquí:"
                        register={register}
                        required
                    />
                </div>
                <div className="col-md-12">
                    <Input
                        id="cualidades"
                        label="¿Qué es lo que la gente más admira de usted? Éstas son las cualidades y virtudes
                        personales particulares que aportas a las relaciones. Escríbalas."
                        register={register}
                        required
                    />
                </div>
                <div className="col-md-12">
                    <Input
                        id="activos"
                        label="¿Cuáles son sus activos más valiosos? Éstos pueden ser cosas intangibles, como
                        experiencias de la vida y relaciones, o también activos tangibles como bienes naturales."
                        register={register}
                        required
                    />
                </div>
                <div className="col-md-12">
                    <Input
                        id="fortalezas"
                        label="Revisa sus respuestas a las preguntas anteriores. ESCRIBA LAS CUATRO
                        “FORTALEZAS” MAS IMPORTANTES QUE DEBE CONSTRUIR PARA LOS SIGUIENTES
                        CAPÍTULOS DE TU VIDA."
                        register={register}
                        required
                    />
                </div>

                <label className="fw-bold">PASO 2: INTROSPECCIÓN. Debilidades.</label>
                <label className="fw-bold">OBJETIVO:</label>
                <label>Identifica qué es lo que le está frenando e imponiendo límites en el siguiente capítulo de su
                    vida. Tener claridad sobre los recursos, capacidades y cualidades de su fuerza interna.
                </label>
                <label className="fw-bold">INSTRUCCIONES:</label>
                <label>
                    1. Conviértete en “observador desapegado” y revisa tu línea de vida. <br />
                    2. Conteste las siguientes preguntas y escriba sus respuestas en los espacios destinados
                    para ello.<br />
                    Observe los momentos en los que experimentaste el fracaso. Preste especial atención a
                    los “patrones” recurrentes de fracaso en tu vida.
                </label>

                <div className="col-md-12">
                    <Input
                        id="debilidad_comun"
                        label="¿Cuál es la debilidad o deficiencia más
                        común que consideras tener y que piensas que está relacionada con estos fracasos?"
                        register={register}
                        required
                    />
                </div>
                <div className="col-md-12">
                    <Input
                        id="tendencias_negativas"
                        label="¿Cuáles son las tendencias negativas o destructivas de su comportamiento que pueden
                        seguir causando sufrimiento a los demás y a usted mismo en el futuro si no son atendidas?
                        Escríbalas."
                        register={register}
                        required
                    />
                </div>
                <div className="col-md-12">
                    <Input
                        id="cambiar_capitulo_de_vida"
                        label="¿Qué es lo que más le gustaría cambiar de usted mismo en el próximo capítulo de tu vida?"
                        register={register}
                        required
                    />
                </div>
                <div className="col-md-12">
                    <Input
                        id="debilidades"
                        label="Revise sus respuestas a las preguntas anteriores. ESCRIBA LAS CUATRO
                        “DEBILIDADES” MAS SIGNIFICATIVAS QUE LO LIMITAN EN EL PRÓXIMO CAPÍTULO
                        DE TU VIDA."
                        register={register}
                        required
                    />
                </div>

                <label className="fw-bold">PASO 3: INTROSPECCIÓN. Amenazas.</label>
                <label className="fw-bold">OBJETIVO:</label>
                <label>Identifique los riesgos implicados en el próximo capítulo de tu vida. Ser consciente de los retos
                    a futuro
                </label>
                <label className="fw-bold">INSTRUCCIONES:</label>
                <label>
                    1. Conviértete en “observador desapegado” y revisa tu línea de vida. <br />
                    2. Conteste las siguientes preguntas y escriba sus respuestas en los espacios destinados
                    para ello.<br />
                </label>

                <div className="col-md-12">
                    <Input
                        id="reto_mas_grande"
                        label="Cuando mire hacia el horizonte, en el próximo capítulo de su vida, ¿cuál cree que sea el
                        reto más grande que tendrá que afrontar?"
                        register={register}
                        required
                    />
                </div>
                <div className="col-md-12">
                    <Input
                        id="riesgo_personal"
                        label="¿Cuál es el riesgo personal más gran de que tiene que tomar en el futuro?"
                        register={register}
                        required
                    />
                </div>
                <div className="col-md-12">
                    <Input
                        id="que_es_lo_que_evita"
                        label="¿Qué es lo que con mayor frecuencia evita, que eventualmente tendrá que afrontar?"
                        register={register}
                        required
                    />
                </div>
                <div className="col-md-12">
                    <Input
                        id="miedo"
                        label="¿A qué le tiene más miedo?"
                        register={register}
                        required
                    />
                </div>
                <div className="col-md-12">
                    <Input
                        id="amenazas"
                        label="Revise sus respuestas anteriores. ANOTE LAS CUATRO “AMENAZAS” MÁS
                        IMPORTANTES, DE LAS CUALES NECESITA ESTAR CONSCIENTE:"
                        register={register}
                        required
                    />
                </div>

                <label className="fw-bold">PASO 4: INTROSPECCIÓN. Oportunidades.</label>
                <label className="fw-bold">OBJETIVO:</label>
                <label>Identifique las oportunidades en el próximo capítulo de tu vida. Ser consciente de las nuevas
                    oportunidades y posibilidades que se te presentan.
                </label>
                <label className="fw-bold">INSTRUCCIONES:</label>
                <label>
                    1. Conviértete en “observador desapegado” y revisa tu línea de vida. <br />
                    2. Conteste las siguientes preguntas y escriba sus respuestas en los espacios destinados
                    para ello.<br />
                </label>

                <div className="col-md-12">
                    <Input
                        id="oportunidades_posibilidades"
                        label="¿Qué nuevas oportunidades y posibilidades parecen presentársele ahora? Estas pueden
                        ser nuevas amistades, eventos o sucesos inesperados que se le están presentando.
                        Escríbalos."
                        register={register}
                        required
                    />
                </div>
                <div className="col-md-12">
                    <Input
                        id="capitulo_de_vida"
                        label="Cuando piensa en el próximo capítulo de tu vida, ¿Cuáles son las posibilidades que más le
                        entusiasman?"
                        register={register}
                        required
                    />
                </div>
                <div className="col-md-12">
                    <Input
                        id="que_haria_si_no_tuviera_miedo"
                        label="¿Qué haría en el próximo capítulo de su vida si no tuviera miedo?"
                        register={register}
                        required
                    />
                </div>
                <div className="col-md-12">
                    <Input
                        id="oportunidades"
                        label="Revisa sus respuestas anteriores. ANOTE LAS CUATRO “OPORTUNIDADES” QUE
                        PUEDEN LLEVARSE A CABO EN EL PRÓXIMO CAPÍTULO DE TU VIDA:"
                        register={register}
                        required
                    />
                </div>

                <div className="form-floating mb-3 col-md-12">
                    <button className="btn col-md-3 btn-dark">Aceptar</button>
                </div>
            </form>
        </div>

    )
}

export default AnalisisFoda