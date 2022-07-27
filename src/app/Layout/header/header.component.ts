import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var links = document.querySelectorAll(".nav-link-item");
    var navLinks: HTMLElement = document.querySelector(".nav-links")!;
    var underline: HTMLElement = document.querySelector(".underline-header")!;
    var navBoudaries = navLinks.getBoundingClientRect()
    for (let i = 0; i < links.length; i++) {
      let link = links[i];
      let boudaries = link.getBoundingClientRect();

      link.addEventListener('mouseover', (e) => {
        underline.style.width = (boudaries.width - 30) + "px";
        underline.style.left = (boudaries['x'] - navBoudaries['x']) + 15 + "px";
      })

      link.addEventListener('mouseleave', (e) => {
        underline.style.width = '0px';
      })
    }
    //mobile
    var burger = document.querySelector('.header-burger')!;
    var mobileDrop = document.querySelector('.mobile-drop')!;
    burger.addEventListener('click', (e) => {
      if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        mobileDrop.classList.remove('active');
        header.classList.remove('active');
      } else {
        burger.classList.add('active');
        mobileDrop.classList.add('active');
        header.classList.add('active');
      }
    })
    var header = document.getElementById('header')!;
    document.addEventListener("scroll", function () {
      if (this.documentElement.scrollTop > 50) {
        header.classList.add('active');
      } else {
        if (this.documentElement.clientWidth > 768 || !burger.classList.contains('active')) {
          header.classList.remove('active');
        }
      }
    });
  }

}
