import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // template: `<h1>Hello World</h1>`,
  standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  //protected readonly title = signal('angular-basics');
  name = signal ('Maysara');
  imageURL = signal('https://angular.io/assets/images/logos/angular/angular.png');

  changeImage(e: KeyboardEvent){
    this.imageURL.set((e.target as HTMLInputElement).value);
  }
  getName(){
    return this.name();
  }
}
