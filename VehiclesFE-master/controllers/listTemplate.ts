import { hasFormatter } from "../interfaces/hasFormatter";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(car: hasFormatter, heading: string){
    const li = document.createElement('li');
    
    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = car.format();
    li.append(p);

    this.container.append(li);
  }
}