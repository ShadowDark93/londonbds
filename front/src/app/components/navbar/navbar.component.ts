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

  idioma: boolean =false;

  constructor(
    public translate: TranslateService
    /* ,
    private el: ElementRef,
    private renderer: Renderer2 */
  ) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.closeMenuMobile();
  }

 /*  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    let part = this.el.nativeElement.querySelector('#navbar');
    if (this.getScreenWidth > 991) {
      this.renderer.addClass(part, 'navbar');
      this.renderer.removeClass(part, 'navbar-mobile');
    } else {
      !this.isMenuOpenned;
      this.renderer.addClass(part, 'navbar-mobile');
      this.renderer.removeClass(part, 'navbar');
    }
  } */

  switchEs() {
    this.translate.use('es');
    this.closeMenuMobile();
    this.idioma = false;
    this.idioma = !this.idioma;
  }

  switchEn() {
    this.translate.use('en');
    this.closeMenuMobile();
    this.idioma = true;
    this.idioma = !this.idioma;
  }

  openMobile() {
    this.isMenuOpenned=true;
  }

  closeMenuMobile() {
    this.isMenuOpenned=false;
  }


}
