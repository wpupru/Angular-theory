import { Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  /*canAddCar = false;

  constructor(){
    setTimeout(() => {
      this.canAddCar = true;
    }, 4000);
  }*/
  addCarStatus = '';
  inputText = '';

  addCar() {
    this.addCarStatus = 'Автомобиль добавлен!';
  }

  /*onKeyup(event: Event){

    this.inputText = (<HTMLInputElement>event.target).value;
  }*/

  /*onKeyup(value){

    this.inputText = value;
  }*/

  onKeyup(event) {

    this.inputText = event.target.value;

  }

}
