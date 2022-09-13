import { Component, OnInit } from '@angular/core';
import { SocialNetworks } from 'src/app/models/social-networks';
import { SocialNetworksService } from 'src/app/services/social-networks.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  socialNetworks: SocialNetworks[]=[];

  constructor(private socialNetworkService: SocialNetworksService) { }

  ngOnInit(): void {
    this.getSocialNetwork();
  }

  getSocialNetwork() {
    this.socialNetworkService.getAllSocialNetworks().subscribe(res => {
      res.forEach(element => {
        this.socialNetworks.push(element);
      });
    });
  }



}
