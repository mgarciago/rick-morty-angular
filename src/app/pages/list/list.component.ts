import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CharacterInterface,
  CharacterResponseInterface,
} from 'src/app/models/character.interface';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public characterList: CharacterInterface[] = [];
  public apiInfo: CharacterResponseInterface[]=[];
  public nextPage: string;
  public filter: string;
  public title: string;
  public page?: string;
  constructor(
    private characterService: CharactersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.filter = '';
    this.title = 'Characters';
    this.nextPage = '';
    
  }

  ngOnInit(): void {
    this.characterService
      .getCharacters()
      .subscribe((data: CharacterResponseInterface) => {
        this.characterList = data.results;
      });

      this.characterService.getMoreCharacters(this.page).subscribe

  }

}
