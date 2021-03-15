import { Car } from '../models/car.js';
import { ListTemplate } from './listTemplate.js';


// DOM 
const form = document.querySelector('.form-container') as HTMLFormElement;

const plate = document.querySelector('#plate') as HTMLInputElement;
const brand = document.querySelector('#brand') as HTMLInputElement;
const color = document.querySelector('#color') as HTMLInputElement;

const ul = document.querySelector('.cars-list') as HTMLUListElement;
const list = new ListTemplate(ul);

// THE CAR
let car: Car;
let values: string[] = [];

// SUBMIT
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  values.push(plate.value);
  values.push(color.value);
  values.push(brand.value);
})

/* function createCar(plate: string, brand: string, color: string) {
    let car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    document.body.innerText = "CAR: PLATE: " + car.plate 
    + " COLOR: " + car.color + " BRAND: " + brand 
    + " WHEELS: " + JSON.stringify(car.wheels);
} */

