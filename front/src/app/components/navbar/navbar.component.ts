import { NgClass } from '@angular/common';
import {
  Component,
  HostListener,
  ElementRef,
  Renderer2,
  OnInit
} from '@angular/core';
import {
  TranslateService
} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMenuOpenned: boolean = false;

  public getScreenWidth: any;

  constructor(public translate: TranslateService,
    private el: ElementRef,
    private renderer: Renderer2) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    let part = this.el.nativeElement.querySelector('#navbar');
    if (this.getScreenWidth > 991) {
      console.log(part);
      this.renderer.addClass(part, 'mobile-nav-toggle');
      this.renderer.removeClass(part, 'navbar');
      this.renderer.removeClass(part, 'navbar-mobile');
    } else if (this.getScreenWidth > 900 && this.getScreenWidth < 1366) {
      this.renderer.addClass(part, 'navbar-mobile');
      this.renderer.removeClass(part, 'navbar');
    } else {
      this.renderer.addClass(part, 'navbar-mobile');
      this.renderer.removeClass(part, 'navbar');
    }
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


}
