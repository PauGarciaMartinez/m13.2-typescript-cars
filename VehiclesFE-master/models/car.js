export class Car {
    constructor(plate, color, brand) {
        this.wheels = new Array();
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    }
    addWheel(wheel) {
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
            return ` 
      <p>${++index} - Brand: ${wheel.brand} - Diameter: ${wheel.diameter}</p>`;
        });
        return displayWheels.toString();
    }
}
