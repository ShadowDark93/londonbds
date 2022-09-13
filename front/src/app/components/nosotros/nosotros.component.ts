import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function loadTranslateJson(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useFactory: (loadTranslateJson),
    deps: [HttpClient]
  }
});
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
