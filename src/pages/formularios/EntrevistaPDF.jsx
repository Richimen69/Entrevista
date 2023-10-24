import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Estados, Caracteristica_personales } from "./Elementos";
import {
  Document,
  View,
  Text,
  Page,
  StyleSheet,
} from "@react-pdf/renderer";

const GenerarPDF = ({ datos }) => {
  //Genera la tabla de hermanos
  const Hermanos = () => {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
      rows.push(
        <View style={styles.tableRow} key={i}>
          <View style={{ ...styles.tableCell, width: "5.2%" }}>
            <Text style={{ ...styles.fuente, textAlign: "center" }}>{i}</Text>
          </View>
          <View style={{ ...styles.tableCell, width: "37%" }}>
            <Text style={{ ...styles.fuente, textAlign: "center" }}>
              {datos["nombre_hermano" + i]}
            </Text>
          </View>
          <View style={{ ...styles.tableCell, width: "20%" }}>
            <Text style={{ ...styles.fuente, textAlign: "center" }}>
              {datos["fecha_hermano" + i]}
            </Text>
          </View>
          <View style={{ ...styles.tableCell, width: "20%" }}>
            <Text style={{ ...styles.fuente, textAlign: "center" }}>
              {datos["sexo_hermano" + i]}
            </Text>
          </View>
          <View style={{ ...styles.tableCell, width: "20%" }}>
            <Text style={{ ...styles.fuente, textAlign: "center" }}>
              {datos["estudios_hermano" + i]}
            </Text>
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
          <View style={{ ...styles.tableCell, width: "5%" }}>
            <Text style={{ ...styles.fuente, textAlign: "center" }}>{i}</Text>
          </View>
          <View style={{ ...styles.tableCell, width: "45.3%" }}>
            <Text style={{ ...styles.fuente, textAlign: "center" }}>
              {datos["relacion_hermano" + i]}
            </Text>
          </View>
          <View style={{ ...styles.tableCell, width: "51%" }}>
            <Text style={{ ...styles.fuente, textAlign: "center" }}>
              {datos["actitud_hermano" + i]}
            </Text>
          </View>
        </View>
      );
    }
    return rows;
  };
  //Genera la tabla de ESTADO PSICOFISIOLOGICOS
  const EstadosPsi = () => {
    const indicadores = Estados.map((Estados) => Estados.name);
    const rows = [];
    for (let i = 0; i <= 9; i++) {
      rows.push(
        <View style={styles.tableRow} key={i}>
          <View style={{ ...styles.tableCell, width: "50%" }}>
            <Text style={{ ...styles.fuente }}>{indicadores[i]}</Text>
          </View>
          <View style={{ ...styles.tableCell, width: "51%" }}>
            <Text style={{ ...styles.fuente, textAlign: "center" }}>
              {datos["option" + i]}
            </Text>
          </View>
        </View>
      );
    }
    return rows;
  };
  const Caracteristicas = () => {
    const autopercepcion = Caracteristica_personales.map((Caracteristica_personales) => Caracteristica_personales.name);
    const rows = [];
    for (let i = 0; i <= 24; i++) {
      rows.push(
        <View style={styles.tableRow} key={i}>
          <View style={{ ...styles.tableCell, width: "50%" }}>
            <Text style={{ ...styles.fuente }}>{autopercepcion[i]}</Text>
          </View>
          <View style={{ ...styles.tableCell, width: "51%" }}>
            <Text style={{ ...styles.fuente, textAlign: "center" }}>
              {datos["car" + i]}
            </Text>
          </View>
          <View style={{ ...styles.tableCell, width: "51%" }}>
            <Text style={{ ...styles.fuente, textAlign: "center" }}>
              {datos["Observacionescar" + i]}
            </Text>
          </View>
        </View>
      );
    }
    return rows;
  };
  //Estilos del PDF
  const styles = StyleSheet.create({
    contenido: {
      display: "table",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "10%",
      marginBottom: "auto",
    },
    table: {
      display: "table",
      width: "80%",
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
    },
    fuente: {
      fontStyle: "normal",
      lineHeight: "1.5px",
      fontSize: "11",
      fontWeight: "bold",
    },
  });
  return (
    <Document>
      <Page size="A4" orientation="portrait">
        <View style={styles.contenido}>
          <View style={{ ...styles.table, marginTop: "30%" }}>
            <View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>Nombre:</Text>
                  <Text style={{ ...styles.fuente }}>{datos.nombre}</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    Estatura: {datos.estatura}
                  </Text>
                  <Text style={{ ...styles.fuente }}>
                    Carrera: {datos.carrera}
                  </Text>
                </View>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>Peso: {datos.peso}</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    Fecha de Nacimiento: {datos.Fecha}
                  </Text>
                  <Text style={{ ...styles.fuente }}>Sexo: {datos.sexo}</Text>
                </View>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>Edad: {datos.edad}</Text>
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
                  <Text style={{ ...styles.fuente }}>
                    Trabaja: {datos.trabaja}
                  </Text>
                  {datos.trabaja === "Si" && (
                    <Text style={{ ...styles.fuente }}>
                      Tipo de Trabajo: {datos.tipo_trabajo}
                    </Text>
                  )}
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    Lugar de Nacimiento: {datos.lugar_nacimiento}
                  </Text>
                  <Text style={{ ...styles.fuente }}>
                    Domicilio Actual: {datos.domicilio}
                  </Text>
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
                  <Text style={{ ...styles.fuente }}>
                    {datos.tipo_vivienda}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    La casa o departamento donde vives es: {datos.la_casa_es}
                  </Text>
                  {datos.la_casa_es === "Otros" && (
                    <Text style={{ ...styles.fuente }}>
                      {datos.la_casa_es_1}
                    </Text>
                  )}
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    Numero de personas con las que vives: {datos.Numero}
                  </Text>
                  <Text style={{ ...styles.fuente }}>
                    Parentesco: {datos.Parentesco}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    Nombre del Padre: {datos.nombre_p}
                  </Text>
                  <Text style={{ ...styles.fuente }}>Edad: {datos.edad_p}</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    Trabaja: {datos.trabaja_padre}{" "}
                  </Text>
                  {datos.trabaja_padre === "Si" && (
                    <Text style={{ ...styles.fuente }}>
                      Tipo de Trabajo: {datos.tipo_trabajo_padre}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
      <Page size="A4" orientation="portrait">
        <View tyle={styles.contenido}>
          <View style={{ ...styles.table, marginTop: "10%" }}>
            <View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>Profesion:</Text>
                  <Text style={{ ...styles.fuente }}>{datos.Profesion_p}</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    Domicilio: {datos.Domicilio_p}
                  </Text>
                  <Text style={{ ...styles.fuente }}>
                    Telefono: {datos.Telefono_p}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    Nombre de la Madre: {datos.nombre_m}
                  </Text>
                  <Text style={{ ...styles.fuente }}>Edad: {datos.edad_m}</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    Trabaja: {datos.trabaja_madre}{" "}
                  </Text>
                  {datos.trabaja_madre === "Si" && (
                    <Text style={{ ...styles.fuente }}>
                      Tipo de Trabajo: {datos.tipo_trabajo_madre}
                    </Text>
                  )}
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
                  <Text style={{ ...styles.fuente }}>
                    Domicilio: {datos.Domicilio_m}
                  </Text>
                  <Text style={{ ...styles.fuente }}>
                    Telefono: {datos.Telefono_m}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Text
            style={{ ...styles.fuente, textAlign: "center", marginTop: "4%" }}
          >
            Nombre de tus hermanos por edad (del mayor al menor incluyéndote tú)
          </Text>
          <View style={{ ...styles.table }}>
            <View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell, width: "42%" }}>
                  <Text style={{ ...styles.fuente, textAlign: "center" }}>
                    Nombre
                  </Text>
                </View>
                <View style={{ ...styles.tableCell, width: "20%" }}>
                  <Text style={{ ...styles.fuente, textAlign: "center" }}>
                    Fecha de Nacimiento
                  </Text>
                </View>
                <View style={{ ...styles.tableCell, width: "20%" }}>
                  <Text style={{ ...styles.fuente, textAlign: "center" }}>
                    Sexo
                  </Text>
                </View>
                <View style={{ ...styles.tableCell, width: "20%" }}>
                  <Text style={{ ...styles.fuente, textAlign: "center" }}>
                    Estudios
                  </Text>
                </View>
              </View>
            </View>
            <Hermanos />
          </View>
          <View style={{ ...styles.table, marginTop: "4%" }}>
            <View style={styles.tableCell}>
              <Text style={styles.fuente}>
                A cuánto ascienden los ingresos mensuales de tu familia:{" "}
                {datos.ingresos}
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.fuente}>
                En caso de ser económicamente independiente a cuanto asciende tu
                ingreso: {datos.ingresos_independiente}
              </Text>
            </View>
            <View>
              <View style={styles.tableCell}>
                <Text style={styles.fuente}>
                  DONDE REALIZASTE TUS ESTUDIOS DE:
                </Text>
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
          <View style={{ ...styles.table, marginTop: "4%" }}>
            <View style={styles.tableCell}>
              <Text style={styles.fuente}>Secundaria: {datos.Secundaria}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.fuente}>
                Bachillerato: {datos.Bachillerato}
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.fuente}>
                Estudios Superiores: {datos.Estudios_Superiores}
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.fuente}>
                ¿Cuenta con prescripción médica de alguna deficiencia sensorial
                o funcional que te obligue a llevar aparatos o controlar tu
                actividad física?: {datos.prescripcion_medica}{" "}
              </Text>
              {datos.prescripcion_medica === "Si" && (
                <Text style={styles.fuente}>
                  ¿Indica cuáles?: {datos.prescripcion}
                </Text>
              )}
            </View>
          </View>
          <Text
            style={{
              ...styles.fuente,
              textAlign: "center",
              marginTop: "4%",
              fontWeight: "bold",
            }}
          >
            ESTADO PSICOFISIOLOGICOS
          </Text>
          <View style={{ ...styles.table }}>
            <View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell, width: "50%" }}>
                  <Text style={{ ...styles.fuente, textAlign: "center" }}>
                    INDICADORES
                  </Text>
                </View>
                <View style={{ ...styles.tableCell, width: "51%" }}>
                  <Text style={{ ...styles.fuente, textAlign: "center" }}>
                    ESTADO
                  </Text>
                </View>
              </View>
              <EstadosPsi />
              <View style={{ ...styles.tableCell, marginTop: "2%" }}>
                <Text style={{ ...styles.fuente }}>
                  Observaciones de Higiene: {datos.observaciones_higiene}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ ...styles.table, marginTop: "4%" }}>
            <View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente, textAlign: "center" }}>
                    ÁREAS DE INTEGRACIÓN
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>ÁREA FAMILIAR:</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    ¿Cómo es la relación con tu familia?:{" "}
                    {datos.relacion_familiar}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    ¿Existen dificultades?: {datos.dificultades}
                  </Text>
                  {datos.dificultades === "Si" && (
                    <Text style={{ ...styles.fuente }}>
                      ¿De qué tipo? : {datos.tipo_dificultades}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
      <Page size="A4" orientation="portrait">
        <View style={styles.contenido}>
          <View style={{ ...styles.table, marginTop: "4%" }}>
            <View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    ¿Qué actitud tienes con tu familia?:{" "}
                    {datos.actitud_familiar}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>EL PADRE</Text>
                  <Text style={{ ...styles.fuente }}>
                    ¿Cómo te relacionas con tu Padre?: {datos.relacion_padre}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    ¿Qué actitud tienes hacia tu Padre?: {datos.actitud_padre}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>LA MADRE</Text>
                  <Text style={{ ...styles.fuente }}>
                    ¿Cómo te relacionas con tu Madre?: {datos.relacion_madre}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    ¿Qué actitud tienes hacia tu Madre?: {datos.actitud_madre}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Text
            style={{ ...styles.fuente, textAlign: "center", marginTop: "4%" }}
          >
            HERMANOS: (Con cada uno de ellos)
          </Text>
          <View style={{ ...styles.table }}>
            <View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell, width: "50%" }}>
                  <Text style={{ ...styles.fuente, textAlign: "center" }}>
                    Relación
                  </Text>
                </View>
                <View style={{ ...styles.tableCell, width: "51%" }}>
                  <Text style={{ ...styles.fuente, textAlign: "center" }}>
                    Actitud
                  </Text>
                </View>
              </View>
              <RelacionHermanos />
            </View>
          </View>
          <View style={{ ...styles.table, marginTop: "4%" }}>
            <View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    ¿Con quién te sientes más ligado afectivamente?:
                  </Text>
                  <Text style={{ ...styles.fuente }}>
                    {datos.ligado_afectivamente}
                  </Text>
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
                  <Text style={{ ...styles.fuente }}>
                    {datos.especifica_ligado}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    ¿Quién se ocupa más directamente de tu educación?:
                  </Text>
                  <Text style={{ ...styles.fuente }}>
                    {datos.ocupa_educacion}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    ¿Quién ha influido más en tu decisión para estudiar esta
                    carrera?:
                  </Text>
                  <Text style={{ ...styles.fuente }}>
                    {datos.decision_carrera}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    Consideras importante facilitar algún otro dato sobre tu
                    ambiente familiar:
                  </Text>
                  <Text style={{ ...styles.fuente }}>
                    {datos.dato_familiar}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente, textAlign: "center" }}>
                    ÁREA SOCIAL:
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    ¿Cómo es tu relación con los compañeros?:
                  </Text>
                  <Text style={{ ...styles.fuente }}>
                    {datos.relacion_companeros}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>¿Por qué?:</Text>
                  <Text style={{ ...styles.fuente }}>
                    {datos.porque_companeros}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    ¿Cómo es tu relación con tus amigos?:
                  </Text>
                  <Text style={{ ...styles.fuente }}>
                    {datos.relacion_amigos}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>¿Tienes Pareja?:</Text>
                  <Text style={{ ...styles.fuente }}>{datos.tiene_pareja}</Text>
                </View>
                {datos.tiene_pareja === "Si" && (
                  <View style={{ ...styles.tableCell }}>
                    <Text style={{ ...styles.fuente }}>
                      ¿Cómo es tu relación con tu pareja?:
                    </Text>
                    <Text style={{ ...styles.fuente }}>
                      {datos.relacion_pareja}
                    </Text>
                  </View>
                )}
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    ¿Cómo es tu relación con tus profesores?:
                  </Text>
                  <Text style={{ ...styles.fuente }}>
                    {datos.relacion_profesores}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    ¿Cómo es tu relación con las autoridades académicas?:
                  </Text>
                  <Text style={{ ...styles.fuente }}>
                    {datos.relacion_autoridades}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    ¿Qué haces en tu tiempo libre?:
                  </Text>
                  <Text style={{ ...styles.fuente }}>{datos.tiempo_libre}</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell }}>
                  <Text style={{ ...styles.fuente }}>
                    ¿Cuál es tu actividad recreativa?:
                  </Text>
                  <Text style={{ ...styles.fuente }}>
                    {datos.actividad_recreativa}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
      <Page size="A4" orientation="portrait">
        <View style={styles.contenido}>
          <View>
            <Text style={{ ...styles.fuente, textAlign: "center" }}>CARACTERÍSTICAS PERSONALES (MADUREZ Y EQUILIBRIO)</Text>
          </View>
          <View style={{ ...styles.table }}>
            <View>
              <View style={styles.tableRow}>
                <View style={{ ...styles.tableCell, width: "50%" }}>
                  <Text style={{ ...styles.fuente, textAlign: "center" }}>
                    AUTOPERCEPCIÓN
                  </Text>
                </View>
                <View style={{ ...styles.tableCell, width: "51%" }}>
                  <Text style={{ ...styles.fuente, textAlign: "center" }}>
                    ESTADO
                  </Text>
                </View>
                <View style={{ ...styles.tableCell, width: "51%" }}>
                  <Text style={{ ...styles.fuente, textAlign: "center" }}>
                    OBSERVACIONES
                  </Text>
                </View>
              </View>
              <Caracteristicas />
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
                  <Text style={{ ...styles.fuente, textAlign: "center" }}>
                    ÁREA PSICOPEDAGÓGICA
                  </Text>
                </View>
              </View>
              <View style={{ ...styles.tableCell }}>
                <Text style={{ ...styles.fuente }}>
                  ¿Cómo te gustaría ser?:
                </Text>
                <Text style={{ ...styles.fuente }}>{datos.como_serias}</Text>
              </View>
              <View style={{ ...styles.tableCell }}>
                <Text style={{ ...styles.fuente }}>
                  ¿Recibes ayuda en tu casa para la realización de tareas
                  escolares?:
                </Text>
                <Text style={{ ...styles.fuente }}>{datos.ayuda_tareas}</Text>
              </View>
              <View style={{ ...styles.tableCell }}>
                <Text style={{ ...styles.fuente }}>
                  ¿Qué problemas personales intervienen en tus estudios?:
                </Text>
                <Text style={{ ...styles.fuente }}>
                  {datos.problemas_estudios}
                </Text>
              </View>
              <View style={{ ...styles.tableCell }}>
                <Text style={{ ...styles.fuente }}>
                  ¿Cuál es tu rendimiento escolar?:
                </Text>
                <Text style={{ ...styles.fuente }}>
                  {datos.rendimiento_escolar}
                </Text>
              </View>
              <View style={{ ...styles.tableCell }}>
                <Text style={{ ...styles.fuente }}>
                  Menciona las asignaturas que cursas en el semestre actual:
                </Text>
                <Text style={{ ...styles.fuente }}>
                  {datos.asignaturas_actuales}
                </Text>
              </View>
              <View style={{ ...styles.tableCell }}>
                <Text style={{ ...styles.fuente }}>
                  ¿Cuál es tu asignatura preferida?:
                </Text>
                <Text style={{ ...styles.fuente }}>
                  {datos.asignatura_preferida}
                </Text>
              </View>
              <View style={{ ...styles.tableCell }}>
                <Text style={{ ...styles.fuente }}>
                  ¿Cuál es tu asignatura preferida?:{" "}
                  {datos.asignatura_preferida}
                </Text>
                <Text style={{ ...styles.fuente }}>
                  ¿Por qué?: {datos.porque_preferida}
                </Text>
              </View>
              <View style={{ ...styles.tableCell }}>
                <Text style={{ ...styles.fuente }}>
                  ¿Cuál es la asignatura en la que sobresales?:{" "}
                  {datos.asignatura_sobresales}
                </Text>
                <Text style={{ ...styles.fuente }}>
                  ¿Por qué?: {datos.porque_sobresales}
                </Text>
              </View>
              <View style={{ ...styles.tableCell }}>
                <Text style={{ ...styles.fuente }}>
                  ¿Qué asignatura te desagrada?: {datos.asignatura_desagrada}
                </Text>
                <Text style={{ ...styles.fuente }}>
                  ¿Por qué?: {datos.porque_desagrada}
                </Text>
              </View>
              <View style={{ ...styles.tableCell }}>
                <Text style={{ ...styles.fuente }}>
                  ¿Cuál es tu asignatura con más bajo promedio del semestre
                  anterior?: {datos.promedio_bajo}
                </Text>
                <Text style={{ ...styles.fuente }}>
                  ¿Por qué?: {datos.porque_promedio_bajo}
                </Text>
              </View>
              <View style={{ ...styles.tableCell }}>
                <Text style={{ ...styles.fuente }}>
                  ¿Por qué vienes al Tecnológico?:
                </Text>
                <Text style={{ ...styles.fuente }}>{datos.porque_viene}</Text>
              </View>
              <View style={{ ...styles.tableCell }}>
                <Text style={{ ...styles.fuente }}>
                  ¿Qué te motiva para venir al Tecnológico?:
                </Text>
                <Text style={{ ...styles.fuente }}>
                  {datos.motivacion_venir}
                </Text>
              </View>
              <View style={{ ...styles.tableCell }}>
                <Text style={{ ...styles.fuente }}>
                  ¿Cuál es tu promedio general del ciclo escolar anterior?:
                </Text>
                <Text style={{ ...styles.fuente }}>
                  {datos.promedio_general}
                </Text>
              </View>
              <View style={{ ...styles.tableCell }}>
                <Text style={{ ...styles.fuente }}>
                  ¿Tienes asignaturas reprobadas?: {datos.tiene_asignaturas_reprobadas}
                </Text>
                {datos.tiene_asignaturas_reprobadas === "Si" && (
                  <Text style={{ ...styles.fuente }}>
                    ¿Cuáles?: {datos.cuales_reprobadas}
                  </Text>
                )}
              </View>
              <View style={{ ...styles.tableCell }}>
                <Text style={{ ...styles.fuente }}>PLAN DE VIDA Y CARRERA</Text>
              </View>
              <View style={{ ...styles.tableCell }}>
                <Text style={{ ...styles.fuente }}>
                  ¿Cuáles son tus planes inmediatos?:
                </Text>
                <Text style={{ ...styles.fuente }}>
                  {datos.planes_inmediatos}
                </Text>
              </View>
              <View style={{ ...styles.tableCell }}>
                <Text style={{ ...styles.fuente }}>
                  ¿Cuáles son tus metas en la vida?:
                </Text>
                <Text style={{ ...styles.fuente }}>{datos.metas_vida}</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
      <Page size="A4" orientation="portrait">
        <View style={styles.contenido}>
          <View style={{ ...styles.table }}>
            <View style={{ ...styles.tableCell }}>
              <Text style={{ ...styles.fuente }}>
                Nombre del entrevistador:
              </Text>
              <Text style={{ ...styles.fuente }}>
                {datos.nombre_entrevistador}
              </Text>
            </View>
            <View style={{ ...styles.tableCell }}>
              <Text style={{ ...styles.fuente }}>Yo soy...</Text>
              <Text style={{ ...styles.fuente }}>{datos.yo_soy}</Text>
            </View>
            <View style={{ ...styles.tableCell }}>
              <Text style={{ ...styles.fuente }}>Mi Carácter es…</Text>
              <Text style={{ ...styles.fuente }}>{datos.mi_caracter}</Text>
            </View>
            <View style={{ ...styles.tableCell }}>
              <Text style={{ ...styles.fuente }}>A mí me gusta que…</Text>
              <Text style={{ ...styles.fuente }}>{datos.me_gusta_que}</Text>
            </View>
            <View style={{ ...styles.tableCell }}>
              <Text style={{ ...styles.fuente }}>Yo Aspiro en la Vida…</Text>
              <Text style={{ ...styles.fuente }}>{datos.yo_aspiro}</Text>
            </View>
            <View style={{ ...styles.tableCell }}>
              <Text style={{ ...styles.fuente }}>Yo tengo miedo que…</Text>
              <Text style={{ ...styles.fuente }}>{datos.tengo_miedo_que}</Text>
            </View>
            <View style={{ ...styles.tableCell }}>
              <Text style={{ ...styles.fuente }}>
                Pero pienso que podré lograr…
              </Text>
              <Text style={{ ...styles.fuente }}>{datos.tengo_miedo_que}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default GenerarPDF