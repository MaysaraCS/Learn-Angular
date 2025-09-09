import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Post } from './post/post';
import { TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  // template: `<h1>Hello World</h1>`,
  standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Post, TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe, JsonPipe],
})
export class AppComponent {
  //protected readonly title = signal('angular-basics');
  name = signal ('Maysara');
  imageURL = signal('https://angular.io/assets/images/logos/angular/angular.png');
  CurrentDate = signal (new Date());
  cost = signal (2000);
  temprature = signal (30.5);
  pizza = signal ({
    toppings: ['Pepperoni', 'beacons' ],
    size: 'Large',
  });

  changeImage(e: KeyboardEvent){
    this.imageURL.set((e.target as HTMLInputElement).value);
  }
  getName(){
    return this.name();
  }
  loImage(e: string){
    console.log(e);
  }
}
