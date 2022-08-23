import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare const $: any
@Component({
  selector: 'mph-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myplacehostead';
  constructor() {

    $(document).ready(function () {

      $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        center: true,
        dots: true,
        items : 1,
        nav: true
        
      })
    })
  }
}
