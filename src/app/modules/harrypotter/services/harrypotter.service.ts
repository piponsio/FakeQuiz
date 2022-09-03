import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { charactersInterface} from '../interfaces/characters';
@Injectable({
  providedIn: 'root'
})
export class HarrypotterService {

  constructor(private http:HttpClient) { }
  
  public getCharacters():Observable<charactersInterface[]> {
    const randomCharacter: string = `http://hp-api.herokuapp.com/api/characters`;
    return this.http.get<charactersInterface[]>(randomCharacter);
  }
}