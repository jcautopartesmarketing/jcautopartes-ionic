export interface empleadoInterfaces {
    id: string;
    tipoDocumento: string[ ];
    nombresCompletos: string;
    numeroDocumento: string;
    activo: boolean;
    fechaNacimiento: string;
    lugarNacimiento: string;
    direccionResidencia: string;
    barrio: string;
    municipio: string;
    // departamento: string;
    telefono: string;
    cargo: string;
    establecimiento?: string; // El signo de interrogación indica que es opcional
    barrioMpioEntrega?: string;
    fechaIngreso2F?: string;
    fechaRetiro3F?: string;
    tipoAusentismo2?: string;
    contrato?: string;
    elaboracionContrato?: string;
    liquidacion?: string;
    salario?: number;
    cliente?: string;
    envioCuentaDeCobro?: string;
    razonSocial?: string;
    arl?: string;
    riesgo?: string;
    tramiteEPS?: string;
    tramite2AFP?: string;
    tramite3CCF?: string;
    tramite4?: string;
    genero?: string;
    estadoCivil?: string;
    cuentaBancaria?: string;
    banco?: string;
    tipoCuenta?: string;
    numeroCuenta?: string;
    correoElectronico?: string;
    observaciones?: string;
}

