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

  public gryffindor = false;
  public slytherin = false;
  public ravenclaw = false;
  public hufflepuff = false;


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
      if(this.characterRandom.house == "Gryffindor") this.gryffindor = true;
      if(this.characterRandom.house == "Slytherin") this.slytherin = true;
      if(this.characterRandom.house == "Ravenclaw") this.ravenclaw = true;
      if(this.characterRandom.house == "Hufflepuff") this.hufflepuff = true;
    });
  }

}
