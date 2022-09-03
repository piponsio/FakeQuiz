import { Component, OnInit } from '@angular/core';

import { charactersInterface } from '../../interfaces/characters';
import { HarrypotterService } from '../../services/harrypotter.service';

@Component({
  selector: 'app-random-character',
  templateUrl: './random-character.component.html',
  styleUrls: ['./random-character.component.css']
})
export class RandomCharacterComponent implements OnInit {

  public characters:charactersInterface[] = [];
  public characterRandom?:charactersInterface;

  constructor(
    private harrypotterService:HarrypotterService
  ) { }

  ngOnInit(): void {
    this.getHarrypotterCharacter();
    console.log(this.characters);
  }

  private getHarrypotterCharacter(){
    this.harrypotterService.getCharacters().subscribe(request => {
      console.log(request);
      
      function returnRandom(){
        return request[Math.floor(Math.random() * (request.length -1 - 0 + 1)) + 0];
      }
      do{ this.characterRandom = returnRandom() }while(this.characterRandom.image=="");
      this.characters = request; 
    });
  }

}
