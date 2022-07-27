import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories-landing',
  templateUrl: './stories-landing.component.html',
  styleUrls: ['./stories-landing.component.scss']
})
export class StoriesLandingComponent implements OnInit {

  @Input() heroHeight = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
