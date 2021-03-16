export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(car, heading1, heading2) {
        // For cars
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading1;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = car.format();
        li.append(p);
        // For wheels
        const h4Bis = document.createElement('h4');
        h4Bis.innerText = heading2;
        li.append(h4Bis);
        const pBis = document.createElement('p');
        pBis.innerText = car.formatWheels();
        li.append(pBis);
        // Final print
        this.container.append(li);
    }
}
