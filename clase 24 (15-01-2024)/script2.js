import { Coder } from "./index.js";


export class CoderMedellin extends Coder {
    constructor(nombre,edad, nivel){
        super(nombre,edad);
        this.especialidad = nivel;
    }
}