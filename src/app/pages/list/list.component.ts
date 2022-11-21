import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterInterface, CharacterResponseInterface } from 'src/app/models/character.interface';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public characterList: CharacterInterface []=[];
  public filter: string;
  public title: string;
  constructor(private characterService: CharactersService, private router: Router) {
    this.filter = "";
    this.title = "Characters"
  }

  ngOnInit(): void {
    this.characterService.getCharacters()
      .subscribe((data: CharacterResponseInterface) => {
        this.characterList = data.results;
      });
  }

}
