import { Wheel } from './wheel.js'

export class Car {
    plate: string;
    color: string;
    brand: string;
    wheels: Wheel[] = new Array();
    
    constructor(plate: string, color: string, brand: string) {
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    }
    
    addWheel(wheel: Wheel): void {
        this.wheels.push(wheel);
    }

    format() {
      return `Brand: ${this.brand} - Color: ${this.color} - Plate: ${this.plate}`
    }
}