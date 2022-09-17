import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  products: Products[] = [];

  constructor(private portfolio: PortafolioService) { }

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

}
