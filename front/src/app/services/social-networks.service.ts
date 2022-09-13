import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SocialNetworks } from '../models/social-networks';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocialNetworksService {

  url: string = 'https://api.colchoneslondonbeds.com/api/social-networks';

  constructor(private http: HttpClient) { }

  getAllSocialNetworks() {
    return this.http.get<SocialNetworks[]>(this.url);
  }
}
