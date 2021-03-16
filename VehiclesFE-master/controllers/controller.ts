import { Car } from '../models/car.js';
import { Wheel } from '../models/wheel.js';
import { ListTemplate } from './listTemplate.js';


// DOM 
const carForm = document.querySelector('.form-container-car') as HTMLFormElement;
const wheelsForm = document.querySelector('.form-container-wheels') as HTMLFormElement;

const plate = document.querySelector('#plate') as HTMLInputElement;
const brand = document.querySelector('#brand') as HTMLInputElement;
const color = document.querySelector('#color') as HTMLInputElement;

const wheel1 = document.querySelector('#wheel-brand-1') as HTMLInputElement;
const wheel2 = document.querySelector('#wheel-brand-2') as HTMLInputElement;
const wheel3 = document.querySelector('#wheel-brand-3') as HTMLInputElement;
const wheel4 = document.querySelector('#wheel-brand-4') as HTMLInputElement;
const diameter1 = document.querySelector('#wheel-diameter-1') as HTMLInputElement;
const diameter2 = document.querySelector('#wheel-diameter-2') as HTMLInputElement;
const diameter3 = document.querySelector('#wheel-diameter-3') as HTMLInputElement;
const diameter4 = document.querySelector('#wheel-diameter-4') as HTMLInputElement;

const ul = document.querySelector('.cars-list') as HTMLUListElement;
const list = new ListTemplate(ul);

// THE CAR
let car: Car;

// SUBMIT
carForm.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  
  let values: string[] = [];
  values.push(plate.value);
  values.push(color.value);
  values.push(brand.value);

  car = new Car(values[0], values[1], values[2]);

  carForm.classList.remove('active');
  carForm.classList.add('inactive');
  wheelsForm.classList.remove('inactive');
  wheelsForm.classList.add('active');
})

wheelsForm.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  car.addWheel(new Wheel(diameter1.valueAsNumber, wheel1.value));
  car.addWheel(new Wheel(diameter2.valueAsNumber, wheel2.value));
  car.addWheel(new Wheel(diameter3.valueAsNumber, wheel3.value));
  car.addWheel(new Wheel(diameter4.valueAsNumber, wheel4.value));

  list.render(car, 'Car:', 'Wheels:');

  carForm.classList.remove('inactive');
  carForm.classList.add('active');
  wheelsForm.classList.remove('active');
  wheelsForm.classList.add('inactive');
})

/* function createCar(plate: string, brand: string, color: string) {
    let car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    document.body.innerText = "CAR: PLATE: " + car.plate 
    + " COLOR: " + car.color + " BRAND: " + brand 
    + " WHEELS: " + JSON.stringify(car.wheels);
} */

