import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/models/character.interface';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public characterList: CharacterInterface[] = [];
  public apiInfo: CharacterInterface[] = [];
  public filter: string;
  public title: string;
  public page: number;
  public numberPage: number;
  constructor(private characterService: CharactersService) {
    this.filter = '';
    this.title = 'Characters';
    this.page = 0;
    this.numberPage = 0;
  }

  ngOnInit(): void {
    this.gatherAllCharcters();
  }

  public gatherAllCharcters() {
    for (let i = 1; i <= 40; i++) {
      this.page = i;
      this.characterService
        .getMoreCharacters(this.page)
        .subscribe((data: any) => {
          data.results.map((character: any) => {
            this.characterList = [...this.characterList, character];
          });
        });
    }
  }

  public nextPage() {
    this.numberPage += 20;
  }

  public prevPage() {
    if (this.numberPage > 0) {
      this.numberPage -= 20;
    }
  }
}
