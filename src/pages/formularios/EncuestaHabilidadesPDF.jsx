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
import { EncuestaOrg } from "./Elementos";
Font.register({ family: 'Helvetica-Bold', fontWeight: 'bold' });

const EncuesteHabilidadesPDF = ({ datos }) => {
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
        table: {
            display: "table",
            width: "100%",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "black",
            marginLeft: "auto",
            marginRight: "auto",

            marginBottom: "auto",
        },
        tableRow: {
            flexDirection: "row",
        },
        tableCell: {
            marginTop: -1,
            marginRight: -1,
            width: "100%",
            borderStyle: "solid",
            padding: 4,
            borderWidth: 1,
            borderColor: "black",
        }
    })
    const Encabezado = () => {
        return (
            <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell, width: "90%", backgroundColor: 'black' }}>
                    <Text style={{ ...styles.fuente, textAlign: "center", color: 'white' }}>
                        PREGUNTAS
                    </Text>
                </View>
                <View style={{ ...styles.tableCell, width: "11%", backgroundColor: 'black' }}>
                    <Text style={{ ...styles.fuente, textAlign: "center", color: 'white' }}>
                        SI/NO
                    </Text>
                </View>
            </View>
        )
    }
    const generateTableRows = (startIndex, endIndex, EncuestaOrg, datos) => {
        const rows = [];
        const indicadores = EncuestaOrg.map((EncuestaOrg) => EncuestaOrg.name);

        for (let i = startIndex; i <= endIndex; i++) {
            rows.push(
                <View style={styles.tableRow} key={i}>
                    <View style={{ ...styles.tableCell, width: "90%" }}>
                        <Text style={{ ...styles.fuente }}>{indicadores[i]}</Text>
                    </View>
                    <View style={{ ...styles.tableCell, width: "11%" }}>
                        <Text style={{ ...styles.fuente, textAlign: "center" }}>
                            {datos["opc" + i]}
                        </Text>
                    </View>
                </View>
            );
        }

        return rows;
    };

    const EncuestaOrganizacion1 = () => {
        return generateTableRows(0, 9, EncuestaOrg, datos);
    };

    const EncuestaOrganizacion2 = () => {
        return generateTableRows(10, 19, EncuestaOrg, datos);
    };
    const EncuestaTecnica1 = () => {
        return generateTableRows(20, 24, EncuestaOrg, datos);
    };
    const EncuestaTecnica2 = () => {
        return generateTableRows(24, 39, EncuestaOrg, datos);
    };

    return (
        <Document>
            <Page size="A4" orientation="portrait">
                <View style={styles.contenido}>
                    <Text style={{ ...styles.fuente, marginTop: '3%', fontFamily: 'Helvetica-Bold', textAlign: 'center' }}>
                        "ENCUESTA SOBRE LAS HABILIDADES DE ESTUDIO”
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '3%', textAlign: 'justify' }}>
                        Instrucciones: La presente encuesta está formada por tres breves cuestionarios, en los cuales
                        puedes indicar los problemas referentes a organización, técnicas y motivación en el estudio,
                        que quizá perjudican tu rendimiento académico. Si contestas todas las preguntas con
                        sinceridad y reflexión podrás identificar mucho de tus actuales defectos al estudiar.
                        Cada cuestionario contiene veinte preguntas, a las que se contestará con sí o no, trazando
                        una X al finalizar cada pregunta, según corresponda tu respuesta a si o no. No hay
                        respuestas "correctas" o "incorrectas", ya que la contestación adecuada es tu juicio sincero
                        sobre tu modo de actuar y tus actitudes personales, respecto al estudio.
                        Responde tan rápido como puedas, Pero sin caer en el descuido, y no dediques demasiado
                        tiempo a una sola pregunta. No omitas ninguna de ellas.
                    </Text>
                    <Text style={{ ...styles.fuente, marginTop: '3%', fontFamily: 'Helvetica-Bold' }}>
                        ENCUESTA PARA ORGANIZACIÓN DEL ESTUDIO.
                    </Text>
                    <View style={{ ...styles.table }}>
                        <View>
                            <Encabezado />
                            <EncuestaOrganizacion1 />
                        </View>
                    </View>
                </View>
            </Page>
            <Page size="A4" orientation="portrait">
                <View style={styles.contenido}>
                    <Encabezado />
                    <EncuestaOrganizacion2 />
                    <Text style={{ ...styles.fuente, marginTop: '3%', fontFamily: 'Helvetica-Bold' }}>
                        ENCUESTA PARA ORGANIZACIÓN DEL ESTUDIO.
                    </Text>
                    <Encabezado />
                    <EncuestaTecnica1 />
                </View>
            </Page>
            <Page size="A4" orientation="portrait">
                <View style={styles.contenido}>
                    <Encabezado />
                    <EncuestaTecnica2 />
                </View>
            </Page>
            <Page size="A4" orientation="portrait">
                <View style={styles.contenido}>

                </View>
            </Page>
            <Page size="A4" orientation="portrait">
                <View style={styles.contenido}>

                </View>
            </Page>
        </Document>
    )
}
export default EncuesteHabilidadesPDF