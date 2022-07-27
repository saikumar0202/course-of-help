import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  heroWrapperHeight = 0;
  constructor() { }

  getHeroHeight(value: number) {
    this.heroWrapperHeight = value;
  }
  ngOnInit(): void {
  }

}
