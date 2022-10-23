import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentInit {

  constructor() { }
  ngAfterContentInit(): void {
    var links = document.querySelectorAll(".nav-link-item");
    var navLinks: HTMLElement = document.querySelector(".nav-links")!;
    var underline: HTMLElement = document.querySelector(".underline-header")!;
    var burger = document.getElementById('header-burger')!;
    var mobileDrop = document.querySelector('.mobile-drop')!;
    var linkItem = document.querySelectorAll('.link-item')!;
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

    burger.addEventListener('click', (e) => {
      handleCloseBurger();
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
    function handleCloseBurger() {
      if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        mobileDrop.classList.remove('active');
        header.classList.remove('active');
      } else {
        burger.classList.add('active');
        mobileDrop.classList.add('active');
        header.classList.add('active');
      }
    }
  }

  handleClickItem() {
    document.getElementById('header-burger')?.click();
  }
  navigationLinks = [
    {
      to: "/",
      text: "Home",
      activeClass: "active",
      exact: false
    },
    {
      to: "/events",
      text: "Events",
      activeClass: "active",
      exact: false
    },
    {
      to: "/gallery",
      text: "Gallery",
      activeClass: "active",
      exact: false
    },
    {
      to: "/about-us",
      text: "About us",
      activeClass: "active",
      exact: false
    },
    {
      to: "/contact-us",
      text: "Contact us",
      activeClass: "active",
      exact: false
    },
  ]

  ngOnInit(): void {

  }

}
