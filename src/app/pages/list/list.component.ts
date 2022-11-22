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
  public apiInfo: CharacterInterface[]=[];
  public filter: string;
  public title: string;
  public page: number;
  constructor(
    private characterService: CharactersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.filter = '';
    this.title = 'Characters';
    this.page = 1;
    
  }

  ngOnInit(): void {
    this.characterService
      .getCharacters()
      .subscribe((data: CharacterResponseInterface) => {
        this.characterList = data.results;
      });


      

  }

  public nextPage() {
    this.page++;
    console.log(this.page)
    this.characterService.getMoreCharacters(this.page).subscribe((data: any) => {
      this.characterList = data.results;
      console.log(this.characterList)
    })
  }

  public prevPage() {
    this.page--;
    this.characterService.getMoreCharacters(this.page).subscribe((data: any) => {
      this.characterList = data.results;
      console.log(this.characterList)
    })
  }

}
