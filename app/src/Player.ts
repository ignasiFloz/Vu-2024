export class Player {
    //nombre,apellido,dorsal,posicion,goles,disparos,pases,asistencias,recuperaciones,tarjetasAM,tarjetasRO,faltas,min,pj,tit,sup,sust,dob,pen,gpp,ge
    nombre: string;
    apellido: string;
    dorsal: number;
    posicion: string;
    goles: number;
    disparos: number;
    pases: number
    asistencias: number
    recuperaciones: number;
    tarjetasAm: number
    tarjetasRo: number;
    faltas: number;
    min: number;
    pj: number;
    tit: number;
    sup: number;
    sust: number;
    dob: number;
    pen: number;
    gpp: number;
    ge: number;

    static PlayersData: Player[] = [];

    constructor(
        nombre: string,
        apellido: string,
        dorsal: number,
        posicion: string,
        goles: number,
        disparos: number,
        pases: number,
        asistencias: number,
        recuperaciones: number,
        tarjetasAm: number,
        tarjetasRo: number,
        faltas: number,
        min: number,
        pj: number,
        tit: number,
        sup: number,
        sust: number,
        dob: number,
        pen: number,
        gpp: number,
        ge: number
    ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dorsal = dorsal;
        this.posicion = posicion;
        this.goles = goles;
        this.disparos = disparos;
        this.pases = pases
        this.asistencias = asistencias
        this.recuperaciones = recuperaciones;
        this.tarjetasAm = tarjetasAm
        this.tarjetasRo = tarjetasRo;
        this.faltas = faltas;
        this.min = min;
        this.pj = pj;
        this.tit = tit;
        this.sup = sup;
        this.sust = sust;
        this.dob = dob;
        this.pen = pen;
        this.gpp = gpp;
        this.ge = ge;
    }
}    