// Ejercicio 
// Crear la clase Electrodomestico con las siguientes caracteristicas: nombre, precio base, color, consumo energetico y peso
// La funcionalidad de la clase debe ser:-Todos los metodos get y set --> ESTE PUNTO TODAVIA NO LO COMENTAMOS EN CLASE ASIQUE LO PUEDEN DEJAR PENDIENTE
// -Comprobar si el electrodomestico es de bajo consumo (valor booleano) --> Ayuda: comparen el consumoEnergetico contra un valor cualquier (ejemplo 100). FUNCION CON RETORNO BOOLEANO
// -Calcular el balance (costo dividido peso) --> Ayuda: this.precioBase/this.peso en funcion con retorno Number
// -Indicar si es un producto de alta gama(balance mayor que 3). Ayuda --> calculen el balance y luego hacen  if balance > 3 --> funcion con retorno booleno/funcion void con console.log


class Electrodomestico {

    public nombre: string = '';
    public precioBase: number = 6000;
    public color: string = '';
    public consumoEnergetico: number = 80;
    public consumoBajo: boolean = true;
    public peso: number = 3;
    public balance: number =0;
    
    
    
    public consumo(): void  {
        if(this.consumoEnergetico < 100){
            this.consumoBajo = true;
            
        }else{
            this.consumoBajo = false;          
        }

    }
    
    public balanceCalculo(): number  {
       this.balance = this.precioBase / this.peso
       return this.balance                     
    }

    public calidadProducto(): void{
        if (this.balance > 3)
            console.log("Producto de alta gama")
                
    }

    
    

        
}
