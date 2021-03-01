export class Todo {
    constructor(tarea) {
        this.tarea      = tarea;
        this.id         = new Date().getTime(); // Representación del tiempo
        this.completado = false;
        this.creado     = new Date();
    }
}