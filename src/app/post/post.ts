import { 
  Component, input, output, OnInit, 
  OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } 
  from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy  {
  postImage = input.required<string>();
  imageSelected = output<string>();

  constructor() {
    console.log('Constructor called');
  }
  ngOnInit() {
    console.log('ngOnInit() called', this.postImage());
  }
  ngOnChanges() {
    console.log('ngOnChanges() called');
  }
  ngDoCheck() {
    console.log('ngDoCheck() called');
  }
  ngAfterContentInit(): void {
      console.log('ngAfterContentInit() called');
  }
  ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked() called');
  }
  ngAfterViewInit(): void {
      console.log('ngAfterViewInit() called');
  }
  ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked() called');
  }
  ngOnDestroy(): void {
      console.log('ngOnDestroy() called');
  }
}
