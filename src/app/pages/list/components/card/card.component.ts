import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterInterface} from 'src/app/models/character.interface';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  title: string;
  filter: string;
  
  @Input() character: CharacterInterface = {};

  constructor(private characterService: CharactersService, private router: Router) {
    this.title = 'Characters';
    this.filter = "";
  }

  
  ngOnInit() {}

  public showDetailCharacter(character: CharacterInterface) {
    this.characterService.getCharacterURL(character);
    this.router.navigate(['/details'])
  }
}