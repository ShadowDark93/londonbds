import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    private portfolio: PortafolioService
  ) { }

  ngOnInit(): void {
  }

  getDataFromBack(id:any) {
    this.portfolio.getProductById(id).subscribe(res => {
      console.log(res);
    });
  }

}
