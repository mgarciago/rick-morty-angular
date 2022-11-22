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
  public numberPage: number;
  constructor(
    private characterService: CharactersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.filter = '';
    this.title = 'Characters';
    this.page = 0;
    this.numberPage = 0;
    
  }

  ngOnInit(): void {

    this.gatherAllCharcters();
      

  }

  public gatherAllCharcters() {
    for(let i = 0; i <= 40; i++) {
      this.page = i;
      console.log(this.page)
      this.characterService.getMoreCharacters(this.page).subscribe((data: any) => {
        data.results.map((character: any) => {
          this.characterList = [...this.characterList, character];
           console.log(this.characterList) 
          
        })
      })
    }
  }

  public nextPage() {
    this.numberPage += 20;
    console.log(this.numberPage)
  }

  public prevPage() {
    if(this.numberPage > 1){
      this.numberPage -= 20;
    }
  } 

}
