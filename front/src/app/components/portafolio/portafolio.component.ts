import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  productos: Products[] = [];

  constructor(private portfolio: PortafolioService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  async getAllProducts() {
    await this.portfolio.getAllProducts().subscribe(res => {
      console.log(res);
      /* res.forEach(producto=> {
        this.productos.push(producto);
      }) */
    });

  }

}
