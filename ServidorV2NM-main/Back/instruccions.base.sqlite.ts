export async function execucionTodoBBDD() {
    const datosBBDD: InfoBBDD = {
        bbdd: arquivosBBDD.persoal,
        ruta: '.',
        sentenciaTablas: creacionTablasBBDD
    };

    const bbdd = new CreoBBDD(datosBBDD);
    const conexion = await bbdd.conexionBBDD(); // Asumimos que es promesa
    const instanciaBBDD = new CRUD(conexion);
    return instanciaBBDD;
}

// Para la instancia global, tendrías que hacer algo similar con async/await, pero no se puede exportar directamente:
let instanciaBBDD: CRUD | null = null;

async function crearInstanciaGlobal() {
    const datosBBDDGlobal: InfoBBDD = {
        bbdd: arquivosBBDD.persoal,
        ruta: '.',
        sentenciaTablas: creacionTablasBBDD
    };
    const bbddGlobal = new CreoBBDD(datosBBDDGlobal);
    const conexion = await bbddGlobal.conexionBBDD();
    instanciaBBDD = new CRUD(conexion);
}

crearInstanciaGlobal();

export { instanciaBBDD };
