import { Component, OnInit } from '@angular/core';
import { SocialNetworks } from 'src/app/models/social-networks';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  socialNetworks: SocialNetworks[]=[];

  constructor() { }

  ngOnInit(): void {

  }

}
