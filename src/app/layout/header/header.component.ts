import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'mph-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public openClose = false;
  public innerWidth = 0;
  constructor() { }

  ngOnInit(): void {

  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.innerWidth=  window.innerWidth
  //   if (window.innerWidth > 550) {
  //     this.openClose = false
  //   }
  // }

}
