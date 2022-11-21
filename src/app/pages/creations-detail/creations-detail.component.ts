import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-creations-detail',
  templateUrl: './creations-detail.component.html',
  styleUrls: ['./creations-detail.component.scss']
})
export class CreationsDetailComponent implements OnInit {
  public creationID = this.characterService.characterData.id;
  public creationDetail = this.characterService.characterData;

  constructor(private characterService: CharactersService, private router: Router) {}

  ngOnInit(): void {
  }
  public editCharacter(character: any){
    this.characterService.editCharacter(character);
    this.router.navigate(['/form']);
  }

  public delete() {
    this.characterService.deleteCharacter(this.creationID).subscribe();
    this.characterService.clearForm();
    Swal.fire("Character deleted");
    this.router.navigate(["/creations"]);
  }

}
