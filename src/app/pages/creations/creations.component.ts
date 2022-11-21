import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterInterface } from 'src/app/models/character.interface';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.scss']
})
export class CreationsComponent implements OnInit {
  public creationsList: CharacterInterface[]=[];
  constructor(private characterService: CharactersService, private router: Router){}

  ngOnInit(): void {
    this.characterService.getMyCreations().subscribe((data: any) => {
      this.creationsList = data; 
    });
  }

  public creationDetail(character: any){
    this.characterService.showDetail(character);
    this.router.navigate(['/creations-details'])
  }
}
