import { Wheel } from './wheel.js';

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
    return `
    <p>Brand: ${this.brand}</p>
    <p>Color: ${this.color}</p>
    <p>Plate: ${this.plate}</p>`;
  }

  formatWheels() {
    let displayWheels = this.wheels.map((wheel, index) => {
      return `<p>${++index} - Brand: ${wheel.brand} - Diameter: ${wheel.diameter}</p>`;
    })
    return displayWheels.toString();
  }
}