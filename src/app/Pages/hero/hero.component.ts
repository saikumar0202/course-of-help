import { AfterViewChecked, AfterViewInit, Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }
  @Output() heroWrapperHeight = new EventEmitter<number>();

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setHeight();
  }
  setHeight() {
    if (window.innerWidth > 768) {
      var wrapper = document.querySelector('#hero-wrapper');
      var height = wrapper?.getBoundingClientRect()?.height;
      console.log(height);
      height && this.heroWrapperHeight.emit((height / 2) + 48);
    } else {
      this.heroWrapperHeight.emit(48);
    }
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.setHeight();
    }, 500);
  }

}
