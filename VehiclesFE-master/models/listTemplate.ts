import { hasFormatter } from '../interfaces/hasFormatter.js';

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(car: hasFormatter, heading1: string, heading2: string) {
    this.container.innerHTML = 
      `<li>
        <h4>${heading1}</h4>
        <p>${car.format()}</p>

        <h4>${heading2}</h4>
        <p>${car.formatWheels()}</p>
      </li>`
  }
}