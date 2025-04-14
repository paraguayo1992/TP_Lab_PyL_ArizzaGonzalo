const valorComun= 100;

class Minima{
    calcularCosto(tiempo){
        return tiempo * valorComun;
    }
    siguienteComplejidad(){
        return new Media();
    }
}

class Media{
    calcularCosto(tiempo){
        const porcentajeExtra = 1.05
        return (tiempo*valorComun) * porcentajeExtra;
    }
    siguienteComplejidad(){
        return new Maxima();
    }
}

class Maxima{
    calcularCosto(tiempo){
        const porcentajeExtra = 1.07
        const costo= (tiempo * valorComun) * porcentajeExtra;
        if (tiempo > 10){
            costo += 1000 * (tiempo - 10);
        }
        return costo;
    }
    siguienteComplejidad(){
       return new Minima();
    }
}

module.exports= { Minima, Media, Maxima};
