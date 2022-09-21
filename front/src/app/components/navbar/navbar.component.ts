import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMenuOpenned: boolean = false;

  dropdownOpenned: boolean = false;

  closeNavbar: boolean = false;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
  }

  switchEs() {
    this.translate.use('es');
    this.menuMobile();
  }

  switchEn() {
    this.translate.use('en');
    this.menuMobile();
  }

  menuMobile() {

      this.isMenuOpenned = !this.isMenuOpenned;

  }

  dropdown() {
    this.dropdownOpenned = !this.dropdownOpenned;
  }

}
