// Ejercicio Crear la clase Electrodomestico con las siguientes caracteristicas: nombre, precio base, color, consumo energetico y peso
// La funcionalidad de la clase debe ser:-Todos los metodos get y set --> ESTE PUNTO TODAVIA NO LO COMENTAMOS EN CLASE ASIQUE LO PUEDEN DEJAR PENDIENTE
// -Comprobar si el electrodomestico es de bajo consumo (valor booleano) --> Ayuda: comparen el consumoEnergetico contra un valor cualquier (ejemplo 100). FUNCION CON RETORNO BOOLEANO
// -Calcular el balance (costo dividido peso) --> Ayuda: this.precioBase/this.peso en funcion con retorno Number
// -Indicar si es un producto de alta gama(balance mayor que 3). Ayuda --> calculen el balance y luego hacen  if balance > 3 --> funcion con retorno booleno/funcion void con console.log


class Electrodomestico {

    public nombre: string = '';
    public precioBase: number = 0;
    public color: string = '';
    public consumoBajo: boolean;
    public consumoEnergetico: number = 100;
    public peso: number = 0;
    
    
    public consumo(): number  {
        if(this.consumoEnergetico < 100){

            this.consumoEnergetico = this.consumoBajo;
        }else{

            this.estaPrendida=false;
        }
    }
    public bajoConsumo(): void {
        if(this.consumoEnergetico < 100){

            this.consumoEnergetico = this.consumoBajo;
        }else{

            this.estaPrendida=false;
        }
    }

    public aguaMate(): number {
        
        if(this.temperaturaActual < this.temperaturaMate){
            this.temperaturaActual++

        }else{
            console.log(this.temperaturaMate);
             

        }
        return this.temperaturaMate    
    } 
    
    

        
}
