import { Component, OnInit, HostListener } from '@angular/core';
interface Lang {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  langs: Lang[] = [
    {value: 'en', viewValue: 'English'},
    {value: 'fr', viewValue: 'French'},
  ];

  isSticky: boolean = false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
