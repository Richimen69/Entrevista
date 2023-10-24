import React from 'react'


const Estados = [
    {
        name: "Manos y/o pies hinchados",
        id: "option0",
        options: ["FRECUENTE/M", "MUY FRECUENTE/M", "NUNCA", "ANTES", "A VECES"],
    },
    {
        name: "Dolores en el vientre",
        id: "option1",
        options: ["FRECUENTE/M", "MUY FRECUENTE/M", "NUNCA", "ANTES", "A VECES"],
    },
    {
        name: "Dolores de cabeza y/o vómitos",
        id: "option2",
        options: ["FRECUENTE/M", "MUY FRECUENTE/M", "NUNCA", "ANTES", "A VECES"],
    },
    {
        name: "Fatiga y agotamiento",
        id: "option3",
        options: ["FRECUENTE/M", "MUY FRECUENTE/M", "NUNCA", "ANTES", "A VECES"],
    },
    {
        name: "Pérdida de vista u oído",
        id: "option4",
        options: ["FRECUENTE/M", "MUY FRECUENTE/M", "NUNCA", "ANTES", "A VECES"],
    },
    {
        name: "Dificultades para dormir",
        id: "option5",
        options: ["FRECUENTE/M", "MUY FRECUENTE/M", "NUNCA", "ANTES", "A VECES"],
    },
    {
        name: "Pesadillas o terrores nocturnos a que:",
        id: "option6",
        options: ["FRECUENTE/M", "MUY FRECUENTE/M", "NUNCA", "ANTES", "A VECES"],
    },

    {
        name: "Incontinencia (orina, heces)",
        id: "option7",
        options: ["FRECUENTE/M", "MUY FRECUENTE/M", "NUNCA", "ANTES", "A VECES"],
    },
    {
        name: "Tartamudeos al explicarse",
        id: "option8",
        options: ["FRECUENTE/M", "MUY FRECUENTE/M", "NUNCA", "ANTES", "A VECES"],
    },
    {
        name: "Miedos intensos ante cosas",
        id: "option9",
        options: ["FRECUENTE/M", "MUY FRECUENTE/M", "NUNCA", "ANTES", "A VECES"],

    },
];
const Caracteristica_personales = [
    {
        name: "Puntual",
        id: "car0",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Tímido/a",
        id: "car1",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Alegre",
        id: "car2",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Agresivo/a",
        id: "car3",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Abierto/a a las ideas de otros",
        id: "car4",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Reflexivo/a",
        id: "car5",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Constante",
        id: "car6",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },

    {
        name: "Optimista",
        id: "car7",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Impulsivo/a",
        id: "car8",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Silencioso/a",
        id: "car9",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Generoso/a",
        id: "car10",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Inquieto/a",
        id: "car11",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Cambios de humor",
        id: "car12",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Dominante",
        id: "car13",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Egoísta",
        id: "car14",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Sumiso/a",
        id: "car15",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Confiado/a en si mismo/a",
        id: "car16",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Imaginativo/a",
        id: "car17",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Con iniciativa propia",
        id: "car18",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Sociable",
        id: "car19",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Responsable",
        id: "car20",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Perseverante",
        id: "car21",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Motivado/a",
        id: "car22",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Activo/a",
        id: "car23",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
    {
        name: "Independiente",
        id: "car24",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],
    },
];
//Renderiza un input
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
            <label htmlFor={id} className="mx-1">
                {label}
            </label>
        </div>
    );
};

const Input = ({ id, label, register, required }) => {
    return (
        <div className="mb-3">
            <label className="mx-1">
                {label}
            </label>
            <textarea
                className="form-control"
                {...register(id, { required })}
                required={required}
                rows='2'
            />
        </div>
    );
};

const Radiocheck = ({ id, label, register, required }) => {
    return (
        <div>
            <div>
                <label className="mx-1">
                    {label}
                </label>
            </div>
            <div className="mb-3">
                <input
                    className="form-check-input mx-3"
                    type="radio"
                    name={id}
                    id={id}
                    value="SI"
                    {...register(id, { required })}
                />
                <label class="form-check-label" for="inlineRadio1">SI</label>
                <input
                    className="form-check-input mx-3"
                    required="true"
                    type="radio"
                    name={id}
                    id={id}
                    value="NO"
                    {...register(id)}
                />
                <label class="form-check-label" for="inlineRadio1">NO</label>
            </div>
        </div>
    );
};

const RaidioOpciones = ({ id, label, register, required }) => {
    return (
        <div>
            <div>
                <label className="mx-1">
                    {label}
                </label>
            </div>
            <div className="mb-3">
                <input
                    className="form-check-input mx-3"
                    type="radio"
                    name={id}
                    id={id}
                    value="1"
                    {...register(id, { required })}
                />
                <label class="form-check-label" for="inlineRadio1">1</label>
                <input
                    className="form-check-input mx-3"
                    required="true"
                    type="radio"
                    name={id}
                    id={id}
                    value="2"
                    {...register(id)}
                />
                <label class="form-check-label" for="inlineRadio1">2</label>
                <input
                    className="form-check-input mx-3"
                    required="true"
                    type="radio"
                    name={id}
                    id={id}
                    value="3"
                    {...register(id)}
                />
                <label class="form-check-label" for="inlineRadio1">3</label>
                <input
                    className="form-check-input mx-3"
                    required="true"
                    type="radio"
                    name={id}
                    id={id}
                    value="4"
                    {...register(id)}
                />
                <label class="form-check-label" for="inlineRadio1">4</label>
                <input
                    className="form-check-input mx-3"
                    required="true"
                    type="radio"
                    name={id}
                    id={id}
                    value="5"
                    {...register(id)}
                />
                <label class="form-check-label" for="inlineRadio1">5</label>
            </div>
        </div>
    )
}

const EncuestaOrg = [
    {
        name: "A.- ¿Sueles dejar para el último la preparación de tus trabajos?",
        id: "opc0",
        options: ["SI", "NO"],
    },
    {
        name: "B.- ¿Crees que el sueño o el cansancio te impidan estudiar eficazmente en muchas ocasiones?",
        id: "opc1",
        options: ["SI", "NO"],
    },
    {
        name: "C.- ¿Es frecuente que no termines tu tarea a tiempo?",
        id: "opc2",
        options: ["SI", "NO"],
    },
    {
        name: "D.- ¿Tiendes a emplear tiempo en leer revistas, ver televisión o charlar cuando debieras dedicarlos a estudiar?",
        id: "opc3",
        options: ["SI", "NO"],
    },
    {
        name: "E.- Tus actividades sociales o deportivas. ¿te llevan a descuidar, a menudo, tus tareas escolares?",
        id: "opc4",
        options: ["SI", "NO"],
    },
    {
        name: "F.- ¿Sueles dejar pasar un día o más antes de repasarlos apuntes tomados en clase?",
        id: "opc5",
        options: ["SI", "NO"],
    },
    {
        name: "G.- ¿Sueles dedicar tu tiempo libre entre las 4:00 de la tarde y las 9:00 de la noche a otras actividades que no sean estudiar?",
        id: "opc6",
        options: ["SI", "NO"],
    },
    {
        name: "H.- ¿Descubres algunas veces de pronto, que debes entregar una tarea antes de lo que creías?",
        id: "opc7",
        options: ["SI", "NO"],
    },
    {
        name: "I.- ¿Te retrasas, con frecuencia, en una asignatura debido a que tienes que estudiar otra?",
        id: "opc8",
        options: ["SI", "NO"],
    },
    {
        name: "J.- ¿Te parece que tu rendimiento es muy bajo, en relación con el tiempo que dedicas al estudio?",
        id: "opc9",
        options: ["SI", "NO"],
    },
    {
        name: "K.- ¿Está situado tu escritorio directamente frente a una ventana, puerta u otra uente de distracción?",
        id: "opc10",
        options: ["SI", "NO"],
    },
    {
        name: "L.- ¿Sueles tener fotografías, trofeos o recuerdos sobre tu mesa de escritorio?",
        id: "opc11",
        options: ["SI", "NO"],
    },
    {
        name: "M.- ¿Sueles estudiar recostado en la cama o arrellanado en un asiento cómodo?",
        id: "opc12",
        options: ["SI", "NO"],
    },
    {
        name: "N.- ¿Produce resplandor la lámpara que utilizas al estudiar?",
        id: "opc13",
        options: ["SI", "NO"],
    },
    {
        name: "O.- Tu mesa de estudio ¿está tan desordenada y llena de objetos, que no dispones de sitio suficiente para estudiar con eficacia?",
        id: "opc14",
        options: ["SI", "NO"],
    },
    {
        name: "P.- ¿Sueles interrumpir tu estudio, por personas que vienen a visitarte?",
        id: "opc15",
        options: ["SI", "NO"],
    },
    {
        name: "Q.- ¿Estudias, con frecuencia, mientras tienes puesta la televisión y/o la radio?",
        id: "opc16",
        options: ["SI", "NO"],
    },
    {
        name: "R.- En el lugar donde estudias, ¿se pueden ver con facilidad revistas, fotos de jóvenes o materiales pertenecientes a tu afición?",
        id: "opc17",
        options: ["SI", "NO"],
    },
    {
        name: "S.- ¿Con frecuencia, interrumpen tu estudio, actividades o ruidos que provienen del exterior?",
        id: "opc18",
        options: ["SI", "NO"],
    },
    {
        name: "T.- ¿Suele hacerse lento tu estudio debido a que no tienes a la mano los libros y los materiales necesarios?",
        id: "opc19",
        options: ["SI", "NO"],
    },

    {
        name: "A.- ¿Tiendes a comenzar la lectura de un libro de texto sin hojear previamente los subtítulos y las ilustraciones?",
        id: "opc20",
        options: ["SI", "NO"],
    },
    {
        name: "B.- ¿Te saltas por lo general las figuras, gráficas y tablas cuando estudias un tema?",
        id: "opc21",
        options: ["SI", "NO"],
    },
    {
        name: "C.- ¿Suelo serte difícil seleccionar los puntos de los temas de estudio?",
        id: "opc22",
        options: ["SI", "NO"],
    },
    {
        name: "D.- ¿Te sorprendes con cierta frecuencia, pensando en algo que no tiene nada que ver con lo que estudias?",
        id: "opc23",
        options: ["SI", "NO"],
    },
    {
        name: "E.- ¿Sueles tener dificultad en entender tus apuntes de clase cuando tratas de repasarlos, después de cierto tiempo?",
        id: "opc24",
        options: ["SI", "NO"],
    },
    {
        name: "F.- Al tomar notas, ¿te sueles quedar atrás con frecuencia debido a que no puedes escribir con suficiente rapidez?",
        id: "opc25",
        options: ["SI", "NO"],
    },
    {
        name: "G.- Poco después de comenzar un curso, ¿sueles encontrarte con tus apuntes formando un 'revoltijo'?",
        id: "opc26",
        options: ["SI", "NO"],
    },
    {
        name: "H.- ¿Tomas normalmente tus apuntes tratando de escribir las palabras exactas del docente?",
        id: "opc27",
        options: ["SI", "NO"],
    },
    {
        name: "I.- Cuando tomas notas de un libro, ¿tienes la costumbre de copiar el material necesario, palabra por Palabra?",
        id: "opc28",
        options: ["SI", "NO"],
    },
    {
        name: "J.- ¿Te es difícil preparar un temario apropiado para una evaluación?",
        id: "opc29",
        options: ["SI", "NO"],
    },
    {
        name: "K.- ¿Tienes problemas para organizar los datos o el contenido de una evaluación?",
        id: "opc30",
        options: ["SI", "NO"],
    },
    {
        name: "L.- ¿Al repasar el temario de una evaluación formulas un resumen de este?",
        id: "opc31",
        options: ["SI", "NO"],
    },
    {
        name: "M.- ¿Te preparas a veces para un evaluación memorizando fórmulas, definiciones o reglas que no entiendes con claridad?",
        id: "opc32",
        options: ["SI", "NO"],
    },
    {
        name: "N.- ¿Te resulta difícil decidir qué estudiar y cómo estudiarlo cuando preparas una evaluación?",
        id: "opc33",
        options: ["SI", "NO"],
    },
    {
        name: "O.- ¿Sueles tener dificultades para organizar, en un orden lógico, las asignaturas que debes estudiar por temas?",
        id: "opc34",
        options: ["SI", "NO"],
    },
    {
        name: "P.- Al preparar evaluación, ¿sueles estudiar toda la asignatura, en el último momento?",
        id: "opc35",
        options: ["SI", "NO"],
    },
    {
        name: "Q.- ¿Sueles entregar tus exámenes sin revisarlos detenidamente, para ver si tienen algún error cometido por descuido?",
        id: "opc36",
        options: ["SI", "NO"],
    },
    {
        name: "R.- ¿Te es posible con frecuencia terminar una evaluación de exposición de un tema en el tiempo prescrito?",
        id: "opc37",
        options: ["SI", "NO"],
    },
    {
        name: "S.- ¿Sueles perder puntos en exámenes con preguntas de 'Verdadero - falso', debido a que no lees detenidamente?",
        id: "opc38",
        options: ["SI", "NO"],
    },
    {
        name: "T.- ¿Empleas normalmente mucho tiempo en contestar la primera mitad de la prueba y tienes que apresurarte en la segunda?",
        id: "opc39",
        options: ["SI", "NO"],
    },

    {
        name: "A.- Después de los primeros días o semanas del curso, ¿tiendes a perder interés por el estudio?",
        id: "opc40",
        options: ["SI", "NO"],
    },
    {
        name: "B.- ¿Crees que en general, basta estudiar lo necesario para obtener un 'aprobado' en las asignaturas",
        id: "opc41",
        options: ["SI", "NO"],
    },
    {
        name: "C.- ¿Te sientes frecuentemente confuso o indeciso sobre cuáles deben ser tus metas formativas y profesionales?",
        id: "opc42",
        options: ["SI", "NO"],
    },
    {
        name: "D.- ¿Sueles pensar que no vale la pena el tiempo y el esfuerzo que son necesarios para lograr una educación universitaria?",
        id: "opc43",
        options: ["SI", "NO"],
    },
    {
        name: "E.- ¿Crees que es más importante divertirte y disfrutar de la vida, que estudiar?",
        id: "opc44",
        options: ["SI", "NO"],
    },
    {
        name: "F.- ¿Sueles pasar el tiempo de clase en divagaciones o soñando despierto en lugar de atender al docente?",
        id: "opc45",
        options: ["SI", "NO"],
    },
    {
        name: "G.- ¿Te sientes habitualmente incapaz de concentrarte en tus estudios debido a que estas inquieto, aburrido o de mal humor?",
        id: "opc46",
        options: ["SI", "NO"],
    },
    {
        name: "H.- ¿Piensas con frecuencia que las asignaturas que estudias tienen poco valor practico para ti?",
        id: "opc47",
        options: ["SI", "NO"],
    },
    {
        name: "I.- ¿Sientes, frecuentes deseos de abandonar la escuela y conseguir un trabajo?",
        id: "opc48",
        options: ["SI", "NO"],
    },
    {
        name: "J.- ¿Sueles tener la sensación de lo que se enseña en los centros docentes no te prepara para afrontar los problemas de la vida adulta?",
        id: "opc49",
        options: ["SI", "NO"],
    },
    {
        name: "K.- ¿Sueles dedicarte de modo casual, según el estado de ánimo en que te encuentres?",
        id: "opc50",
        options: ["SI", "NO"],
    },
    {
        name: "L.- ¿Te horroriza estudiar libros de textos porque son insípidos y aburridos?",
        id: "opc51",
        options: ["SI", "NO"],
    },
    {
        name: "M.- ¿Esperas normalmente a que te fijen la fecha de un evaluación para comenzar a estudiar los textos o repasar tus apuntes de clases?",
        id: "opc52",
        options: ["SI", "NO"],
    },
    {
        name: "N - ¿Sueles pensar que los exámenes son pruebas penosas de las que no se puede escapar y respecto a las cuales lo que debe hacerse es sobrevivir, del modo que sea?",
        id: "opc53",
        options: ["SI", "NO"],
    },
    {
        name: "O.- ¿Sientes con frecuencia que tus docentes no comprenden las necesidades de los estudiantes?",
        id: "opc54",
        options: ["SI", "NO"],
    },
    {
        name: "P.- ¿Tienes normalmente la sensación de que tus docentes exigen demasiadas horas de estudio fuera de clase?",
        id: "opc55",
        options: ["SI", "NO"],
    },
    {
        name: "Q.- ¿Dudas por lo general, en pedir ayuda a tus docentes en tareas que te son difíciles?",
        id: "opc56",
        options: ["SI", "NO"],
    },
    {
        name: "R.- ¿Sueles pensar que tus docentes no tienen contacto con los temas y sucesos de actualidad?",
        id: "opc57",
        options: ["SI", "NO"],
    },
    {
        name: "S.- ¿Te sientes reacio, por lo general, a hablar con tus docentes de tus proyectos futuros, de estudio o profesionales?",
        id: "opc58",
        options: ["SI", "NO"],
    },
    {
        name: "T.- ¿Criticas con frecuencia a tus docentes cuando charlas con tus compañeros?",
        id: "opc59",
        options: ["SI", "NO"],
    },
]

export { Estados, FormInput, Caracteristica_personales, Input, Radiocheck, RaidioOpciones, EncuestaOrg }