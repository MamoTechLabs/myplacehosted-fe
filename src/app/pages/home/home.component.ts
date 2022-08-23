import { Component, OnInit } from '@angular/core';
declare const $: any
@Component({
  selector: 'mph-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    $(document).ready(function () {

      $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        center: true,
        dots: true,
        items: 1,
        nav: true

      })
    })
  }

  ngOnInit(): void {
  }


}
