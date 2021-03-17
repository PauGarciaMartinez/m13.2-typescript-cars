import { Car } from '../models/car.js';
import { Wheel } from '../models/wheel.js';
import { ListTemplate } from '../models/listTemplate.js';
// THE CAR
let car;
// THE LIST
const ul = document.querySelector('.cars-list');
const list = new ListTemplate(ul);
// SUBMIT EVENTS
const carForm = document.querySelector('.form-container-car');
carForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validateCarInputs();
});
const wheelsForm = document.querySelector('.form-container-wheels');
wheelsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validateWheelsInputs();
});
// CAR INPUTS & FORM VALIDATION
function validateCarInputs() {
    const plate = document.querySelector('#plate');
    const brand = document.querySelector('#brand');
    const color = document.querySelector('#color');
    const nameRegex = new RegExp(/^[ña-z]{2,25}\s?[ña-z]{2,25}$/gi);
    const plateRegex = new RegExp(/^[0-9]{4}[ña-z]{3}$/gi);
    if (!plate.value.match(plateRegex)) {
        setErrorFor(plate, "Plate is not valid");
    }
    else {
        setSuccessFor(plate);
    }
    if (!brand.value.match(nameRegex)) {
        setErrorFor(brand, "Brand is not valid");
    }
    else {
        setSuccessFor(brand);
    }
    if (!color.value.match(nameRegex)) {
        setErrorFor(color, "Color is not valid");
    }
    else {
        setSuccessFor(color);
    }
    validateCarForm(plate.value, brand.value, color.value);
}
function validateCarForm(plateVal, brandVal, colorVal) {
    const plateGroup = document.getElementById("plate-input");
    const brandGroup = document.getElementById("brand-input");
    const colorGroup = document.getElementById("color-input");
    if (plateGroup.classList.contains("success") && brandGroup.classList.contains("success") && colorGroup.classList.contains("success")) {
        let values = [];
        values.push(plateVal);
        values.push(colorVal);
        values.push(brandVal);
        car = new Car(values[0], values[1], values[2]);
        carForm.classList.remove('active');
        carForm.classList.add('inactive');
        wheelsForm.classList.remove('inactive');
        wheelsForm.classList.add('active');
        carForm.reset();
        resetCarForm(plateGroup, brandGroup, colorGroup);
    }
}
// WHEELS INPUTS & FORM VALIDATION
function validateWheelsInputs() {
    const wheel1 = document.querySelector('#wheel-brand-1');
    const wheel2 = document.querySelector('#wheel-brand-2');
    const wheel3 = document.querySelector('#wheel-brand-3');
    const wheel4 = document.querySelector('#wheel-brand-4');
    const diameter1 = document.querySelector('#wheel-diameter-1');
    const diameter2 = document.querySelector('#wheel-diameter-2');
    const diameter3 = document.querySelector('#wheel-diameter-3');
    const diameter4 = document.querySelector('#wheel-diameter-4');
    const nameRegex = new RegExp(/[ña-z]{2,25}/gi);
    const sizeRegex = new RegExp(/^0(\.[4-9])$|^1(\.[1-9])?$|^2$/gi);
    if (!wheel1.value.match(nameRegex)) {
        setErrorFor(wheel1, "Brand is not valid");
    }
    else {
        setSuccessFor(wheel1);
    }
    if (!wheel2.value.match(nameRegex)) {
        setErrorFor(wheel2, "Brand is not valid");
    }
    else {
        setSuccessFor(wheel2);
    }
    if (!wheel3.value.match(nameRegex)) {
        setErrorFor(wheel3, "Brand is not valid");
    }
    else {
        setSuccessFor(wheel3);
    }
    if (!wheel4.value.match(nameRegex)) {
        setErrorFor(wheel4, "Brand is not valid");
    }
    else {
        setSuccessFor(wheel4);
    }
    if (!diameter1.value.match(sizeRegex)) {
        setErrorFor(diameter1, "Diameter is not valid");
    }
    else {
        setSuccessFor(diameter1);
    }
    if (!diameter2.value.match(sizeRegex)) {
        setErrorFor(diameter2, "Diameter is not valid");
    }
    else {
        setSuccessFor(diameter2);
    }
    if (!diameter3.value.match(sizeRegex)) {
        setErrorFor(diameter3, "Diameter is not valid");
    }
    else {
        setSuccessFor(diameter3);
    }
    if (!diameter4.value.match(sizeRegex)) {
        setErrorFor(diameter4, "Diameter is not valid");
    }
    else {
        setSuccessFor(diameter4);
    }
    validateWheelsForm(wheel1.value, wheel2.value, wheel3.value, wheel4.value, diameter1.valueAsNumber, diameter2.valueAsNumber, diameter3.valueAsNumber, diameter4.valueAsNumber);
}
function validateWheelsForm(wheel1Val, wheel2Val, wheel3Val, wheel4Val, diameter1Val, diameter2Val, diameter3Val, diameter4Val) {
    const wheel1Group = document.getElementById("wheel1-input");
    const wheel2Group = document.getElementById("wheel2-input");
    const wheel3Group = document.getElementById("wheel3-input");
    const wheel4Group = document.getElementById("wheel4-input");
    const diameter1Group = document.getElementById("diameter1-input");
    const diameter2Group = document.getElementById("diameter2-input");
    const diameter3Group = document.getElementById("diameter3-input");
    const diameter4Group = document.getElementById("diameter4-input");
    if (wheel1Group.classList.contains("success") && wheel2Group.classList.contains("success") && wheel3Group.classList.contains("success") && wheel4Group.classList.contains("success") && diameter1Group.classList.contains("success") && diameter2Group.classList.contains("success") && diameter3Group.classList.contains("success") && diameter4Group.classList.contains("success")) {
        car.addWheel(new Wheel(diameter1Val, wheel1Val));
        car.addWheel(new Wheel(diameter2Val, wheel2Val));
        car.addWheel(new Wheel(diameter3Val, wheel3Val));
        car.addWheel(new Wheel(diameter4Val, wheel4Val));
        list.render(car, 'Car:', 'Wheels:');
        carForm.classList.remove('inactive');
        carForm.classList.add('active');
        wheelsForm.classList.remove('active');
        wheelsForm.classList.add('inactive');
        wheelsForm.reset();
        resetWheelsForm(wheel1Group, wheel2Group, wheel3Group, wheel4Group, diameter1Group, diameter2Group, diameter3Group, diameter4Group);
    }
}
// SUCCESS OR ERROR
function setErrorFor(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector("small");
    small.innerText = message;
    formGroup.classList.add("error");
}
function setSuccessFor(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove("error");
    formGroup.classList.add("success");
}
// RESET FUNCTIONS
function resetCarForm(input1, input2, input3) {
    const inputs = [input1, input2, input3];
    inputs.forEach(item => item.classList.remove("success"));
}
function resetWheelsForm(input1, input2, input3, input4, input5, input6, input7, input8) {
    const inputs = [input1, input2, input3, input4, input5, input6, input7, input8];
    inputs.forEach(item => item.classList.remove("success"));
}
