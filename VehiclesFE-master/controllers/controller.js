import { ListTemplate } from './listTemplate.js';
// DOM 
const form = document.querySelector('.form-container');
const plate = document.querySelector('#plate');
const brand = document.querySelector('#brand');
const color = document.querySelector('#color');
const ul = document.querySelector('.cars-list');
const list = new ListTemplate(ul);
// THE CAR
let car;
let values = [];
// SUBMIT
form.addEventListener('submit', (e) => {
    e.preventDefault();
    values.push(plate.value);
    values.push(color.value);
    values.push(brand.value);
});
/* function createCar(plate: string, brand: string, color: string) {
    let car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    document.body.innerText = "CAR: PLATE: " + car.plate
    + " COLOR: " + car.color + " BRAND: " + brand
    + " WHEELS: " + JSON.stringify(car.wheels);
} */
