import { Component, Input, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-rate-bar',
  templateUrl: './rate-bar.component.html',
  styleUrls: ['./rate-bar.component.scss']
})
export class RateBarComponent implements AfterViewInit {

  @Input() title: string;
  @Input() rate: number;

  starNumber: number = 5;
  @ViewChildren('star') stars: QueryList<ElementRef>; 

  mark(i: number): void {
    this.stars.forEach((val, key) => {
      if (key <= i) {
        val.nativeElement.classList.add("mark");
        val.nativeElement.classList.remove("unmark");
      }
    });
  }
  
  removeMark(i: number): void {
    this.stars.forEach((val, key) => {
      if (key <= i) {
        val.nativeElement.classList.remove("mark");
        val.nativeElement.classList.add("unmark");
      }
    });
  }

  setRate(i: number): void {
    this.rate = i + 1;
    this.stars.forEach((val, key) => {
      if (key <= i) {
        val.nativeElement.classList.add("fixedMark");
      } else {
        val.nativeElement.classList.remove("fixedMark");
      }
    });
  }

  ngAfterViewInit() {
    this.setRate(this.rate - 1);
  }

}
