import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'mph-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

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
      $('.stretcher-item').mouseenter(function (this: any) {
        $(this).toggleClass('active').siblings().addClass('inactive');
      })

      $('.stretcher-item').mouseleave(function (this: any) {
        $(this).toggleClass('active').siblings().removeClass('inactive');
        

      })


      $('.cards figure').on({
        mouseenter: function (event: any) {
          $(this).addClass('active');
        },
        mouseleave: function (event: any) {
          $(this).removeClass('active');
        }
      });
    })

  }

  ngOnInit(): void {
  }

}
