import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { gatitosInterface} from '../interfaces/gatitos';

@Injectable({
  providedIn: 'root'
})
export class GatitosService {

  constructor(private http:HttpClient) { }

  public getGatito():Observable<gatitosInterface[]> {
    const randomGatito: string = `https://api.thecatapi.com/v1/images/search`;
    return this.http.get<gatitosInterface[]>(randomGatito);
  }
}
