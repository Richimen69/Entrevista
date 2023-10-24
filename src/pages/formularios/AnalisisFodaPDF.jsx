import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Document,
    View,
    Text,
    Page,
    StyleSheet,
    Font
} from "@react-pdf/renderer";
Font.register({ family: 'Helvetica-Bold', fontWeight: 'bold' });

const AnalisisFodaPDF = ({ datos }) => {
    const styles = StyleSheet.create({

        contenido: {
            display: "table",
            width: "82%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10%",
            marginBottom: "auto",
        },
        fuente: {
            fontStyle: "normal",
            lineHeight: "1.5px",
            fontSize: "12",
            fontWeight: "bold",
            hyphenation: 'none'
        },
    });
    return (
        <Document>
            <Page size="A4" orientation="portrait">
                <View style={styles.contenido}>
                    <Text style={{ ...styles.fuente, textAlign: 'center', marginTop: '3%', fontFamily: 'Helvetica-Bold' }}>
                        ANÁLISIS FODA
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '3%', textAlign: 'justify' }}>
                        Es una herramienta para conocer la situación real y actual en que se encuentra una persona,
                        organización, empresa o proyecto analizando sus características internas (Debilidades y
                        Fortalezas) y su situación externa (Amenazas y Oportunidades) y planificar una estrategia de
                        mejora a futuro.
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '3%', textAlign: 'justify' }}>
                        Durante la etapa de planificación estratégica y a partir del análisis FODA se debe poder
                        contestar cada una de las siguientes preguntas:
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify', marginLeft: '2%' }}>
                        • ¿Cómo se puede destacar cada fortaleza?
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify', marginLeft: '2%' }}>
                        • ¿Cómo se puede disfrutar cada oportunidad?
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify', marginLeft: '2%' }}>
                        • ¿Cómo se puede defender cada debilidad?
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify', marginLeft: '2%' }}>
                        • ¿Cómo se puede detener cada amenaza?
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '3%', textAlign: 'justify' }}>
                        Este recurso fue creado a principios de la década de los setenta. El objetivo del análisis FODA
                        es determinar las ventajas competitivas personales para ponderarlas y fortalecer aquellas
                        debilidades que se detecten y convertirlos en oportunidades.
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '3%', textAlign: 'justify' }}>
                        A continuación realiza tu Análisis FODA contestando con toda veracidad en los espacios para
                        ello destinados.
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'center', marginTop: '3%', fontFamily: 'Helvetica-Bold' }}>
                        Paso 1: INTROSPECCIÓN. Fortalezas.
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify', fontFamily: 'Helvetica-Bold' }}>
                        OBJETIVO:
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        Identifique lo que tiene que construir en el siguiente capítulo de tu vida. Tome conciencia de
                        qué recursos, capacidades y cualidades conforman tus fortalezas principales.
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify', fontFamily: 'Helvetica-Bold' }}>
                        INSTRUCCIONES:
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify', marginLeft: '2%' }}>
                        1. Conviértete en “observador desapegado” y revisa tu línea de vida.
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify', marginLeft: '2%' }}>
                        2. Contesta las siguientes preguntas y escribe tus respuestas en los espacios
                        destinados para ello.
                    </Text>
                </View>
            </Page>
            <Page size="A4" orientation="portrait">
                <View style={styles.contenido}>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        Revisa la línea de vida y observa aquellos momentos en los cuales experimentaste los
                        mayores éxitos o victorias. ¿Qué talentos especiales sacaste a relucir en dichos
                        momentos? Identifica cuáles son tus mayores talentos. Estos pueden ser habilidades o
                        competencias.
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify' }}>
                        {datos.talentos}
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        ¿Qué es lo que la gente más admira de usted? Éstas son las cualidades y virtudes
                        personales particulares que aportas a las relaciones.
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify' }}>
                        {datos.cualidades}
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        ¿Cuáles son sus activos más valiosos? Éstos pueden ser cosas intangibles, como
                        experiencias de la vida y relaciones, o también activos tangibles como bienes naturales.
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify' }}>
                        {datos.activos}
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        Revisa sus respuestas a las preguntas anteriores. ESCRIBA LAS CUATRO
                        “FORTALEZAS” MAS IMPORTANTES QUE DEBE CONSTRUIR PARA LOS SIGUIENTES
                        CAPÍTULOS DE TU VIDA.
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify' }}>
                        {datos.fortalezas}
                    </Text>
                </View>
            </Page>
            <Page size="A4" orientation="portrait">
                <View style={styles.contenido}>
                    <Text style={{ ...styles.fuente, textAlign: 'center', marginTop: '3%', fontFamily: 'Helvetica-Bold' }}>
                        PASO 2: INTROSPECCIÓN. Debilidades.
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify', fontFamily: 'Helvetica-Bold' }}>
                        OBJETIVO:
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        Identifica qué es lo que le está frenando e imponiendo límites en el siguiente capítulo de su
                        vida. Tener claridad sobre los recursos, capacidades y cualidades de su fuerza interna.
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify', fontFamily: 'Helvetica-Bold' }}>
                        INSTRUCCIONES:
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify', marginLeft: '2%' }}>
                        1. Conviértete en “observador desapegado” y revisa tu línea de vida.
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify', marginLeft: '2%' }}>
                        2. Contesta las siguientes preguntas y escribe tus respuestas en los espacios
                        destinados para ello.
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        Observe los momentos en los que experimentaste el fracaso. Preste especial atención a
                        los “patrones” recurrentes de fracaso en tu vida. ¿Cuál es la debilidad o deficiencia más
                        común que consideras tener y que piensas que está relacionada con estos fracasos?
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify' }}>
                        {datos.debilidad_comun}
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        ¿Cuáles son las tendencias negativas o destructivas de su comportamiento que pueden
                        seguir causando sufrimiento a los demás y a usted mismo en el futuro si no son atendidas?
                        Escríbalas.
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify' }}>
                        {datos.tendencias_negativas}
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        ¿Qué es lo que más le gustaría cambiar de usted mismo en el próximo capítulo de tu vida?
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify' }}>
                        {datos.cambiar_capitulo_de_vida}
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        Revise sus respuestas a las preguntas anteriores. ESCRIBA LAS CUATRO
                        “DEBILIDADES” MAS SIGNIFICATIVAS QUE LO LIMITAN EN EL PRÓXIMO CAPÍTULO
                        DE TU VIDA
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify' }}>
                        {datos.debilidades}
                    </Text>
                </View>
            </Page>
            <Page size="A4" orientation="portrait">
                <View style={styles.contenido}>
                    <Text style={{ ...styles.fuente, textAlign: 'center', marginTop: '3%', fontFamily: 'Helvetica-Bold' }}>
                        PASO 3: INTROSPECCIÓN. Amenazas.
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify', fontFamily: 'Helvetica-Bold' }}>
                        OBJETIVO:
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        Identifique los riesgos implicados en el próximo capítulo de tu vida. Ser consciente de los retos
                        a futuro.
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify', fontFamily: 'Helvetica-Bold' }}>
                        INSTRUCCIONES:
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify', marginLeft: '2%' }}>
                        1. Conviértete en “observador desapegado” y revisa tu línea de vida.
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify', marginLeft: '2%' }}>
                        2. Contesta las siguientes preguntas y escribe tus respuestas en los espacios
                        destinados para ello.
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        Cuando mire hacia el horizonte, en el próximo capítulo de su vida, ¿cuál cree que sea el
                        reto más grande que tendrá que afrontar?
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify' }}>
                        {datos.reto_mas_grande}
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        ¿Cuál es el riesgo personal más gran de que tiene que tomar en el futuro?
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify' }}>
                        {datos.riesgo_personal}
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        ¿Qué es lo que con mayor frecuencia evita, que eventualmente tendrá que afrontar?
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify' }}>
                        {datos.que_es_lo_que_evita}
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        ¿A qué le tiene más miedo?
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify' }}>
                        {datos.miedo}
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        Revise sus respuestas anteriores. ANOTE LAS CUATRO “AMENAZAS” MÁS
                        IMPORTANTES, DE LAS CUALES NECESITA ESTAR CONSCIENTE:
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify' }}>
                        {datos.amenazas}
                    </Text>
                </View>
            </Page>
            <Page size="A4" orientation="portrait">
                <View style={styles.contenido}>
                    <Text style={{ ...styles.fuente, textAlign: 'center', marginTop: '3%', fontFamily: 'Helvetica-Bold' }}>
                        PASO 4: INTROSPECCIÓN. Oportunidades
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify', fontFamily: 'Helvetica-Bold' }}>
                        OBJETIVO:
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        Identifique las oportunidades en el próximo capítulo de tu vida. Ser consciente de las nuevas
                        oportunidades y posibilidades que se te presentan.

                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify', fontFamily: 'Helvetica-Bold' }}>
                        INSTRUCCIONES:
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify', marginLeft: '2%' }}>
                        1. Conviértete en “observador desapegado” y revisa tu línea de vida.
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify', marginLeft: '2%' }}>
                        2. Contesta las siguientes preguntas y escribe tus respuestas en los espacios
                        destinados para ello.
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        ¿Qué nuevas oportunidades y posibilidades parecen presentársele ahora? Estas pueden
                        ser nuevas amistades, eventos o sucesos inesperados que se le están presentando.
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify' }}>
                        {datos.oportunidades_posibilidades}
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        Cuando piensa en el próximo capítulo de tu vida, ¿Cuáles son las posibilidades que más le
                        entusiasman?
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify' }}>
                        {datos.capitulo_de_vida}
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        ¿Qué haría en el próximo capítulo de su vida si no tuviera miedo?
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify' }}>
                        {datos.que_haria_si_no_tuviera_miedo}
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '2%', textAlign: 'justify' }}>
                        Revisa sus respuestas anteriores. ANOTE LAS CUATRO “OPORTUNIDADES” QUE
                        PUEDEN LLEVARSE A CABO EN EL PRÓXIMO CAPÍTULO DE TU VIDA:
                    </Text>
                    <Text style={{ ...styles.fuente, textAlign: 'justify' }}>
                        {datos.oportunidades}
                    </Text>
                </View>
            </Page>
        </Document>
    )

}

export default AnalisisFodaPDF