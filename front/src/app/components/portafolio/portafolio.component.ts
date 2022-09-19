import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { PortafolioService } from 'src/app/services/portafolio.service';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  products: Products[] = [];

  constructor(
    private portfolio: PortafolioService,
    private router: Router,
    private detail: DetailComponent,
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.portfolio.getAllProduction().subscribe(res => {
      res.forEach(el => {
        this.products.push(el);
      });
    });
  }

  getProductById(id: any) {
    this.detail.getDataFromBack(id);
    this.router.navigate(['products', id]);

  }

}
