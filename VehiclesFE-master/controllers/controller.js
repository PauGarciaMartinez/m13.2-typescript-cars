import { Car } from '../models/car.js';
import { ListTemplate } from './listTemplate.js';
// DOM 
const carForm = document.querySelector('.form-container-car');
const wheelsForm = document.querySelector('.form-container-wheels');
const plate = document.querySelector('#plate');
const brand = document.querySelector('#brand');
const color = document.querySelector('#color');
const ul = document.querySelector('.cars-list');
const list = new ListTemplate(ul);
// THE CAR
let car;
let values = [];
// SUBMIT
carForm.addEventListener('submit', (e) => {
    e.preventDefault();
    values.push(plate.value);
    values.push(color.value);
    values.push(brand.value);
    car = new Car(values[0], values[1], values[2]);
    list.render(car, 'Car:');
    carForm.classList.add('inactive');
    wheelsForm.classList.add('active');
});
/* function createCar(plate: string, brand: string, color: string) {
    let car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    document.body.innerText = "CAR: PLATE: " + car.plate
    + " COLOR: " + car.color + " BRAND: " + brand
    + " WHEELS: " + JSON.stringify(car.wheels);
} */
