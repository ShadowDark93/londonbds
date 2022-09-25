import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Products } from 'src/app/models/products';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private id: any;

  products: Products[] = [];

  text: any;

  constructor(
    public translate: TranslateService,
    private portfolio: PortafolioService,
    private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.getDataFromBack(this.id);
    this.currentLang();

  }

  getDataFromBack(id: any) {
    this.portfolio.getProductById(id).subscribe(res => {
      res.forEach(el => {
        this.products.push(el);
      });
      this.text = this.products[0].description_es;
    });
  }

  currentLang() {
    this.translate.onLangChange
      .subscribe((event: LangChangeEvent) => {
        console.log('onLangChange', event);
        if (event.lang == 'es') {
          this.text = this.products[0].description_es;
        } else {
          this.text = this.products[0].description_en;
        }
      });
  }

}
