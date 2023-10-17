import React from "react";

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
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],    },
    {
        name: "Alegre",
        id: "car2",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],        
    },
    {
        name: "Agresivo/a",
        id: "car3",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],    },
    {
        name: "Abierto/a a las ideas de otros",
        id: "car4",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],    },
    {
        name: "Reflexivo/a",
        id: "car5",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],    },
    {
        name: "Constante",
        id: "car6",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],    },

    {
        name: "Optimista",
        id: "car7",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],    },
    {
        name: "Impulsivo/a",
        id: "car8",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],    },
    {
        name: "Silencioso/a",
        id: "car9",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],    },
    {
        name: "Generoso/a",
        id: "car10",
        options: ["NO", "POCO", "FRECUENTE/M.", "MUCHO"],    },
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

export { Estados, FormInput, Caracteristica_personales };