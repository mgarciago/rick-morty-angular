import { Component, Input, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/models/character.interface';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
@Input() detail: CharacterInterface = {};
constructor(private characterService: CharactersService) {}

ngOnInit(): void {
  this.characterService.getCharacterDetail().subscribe((data: any) => {
    this.detail = data;
  })
}

}
