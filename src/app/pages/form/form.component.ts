import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
public characterForm!: FormGroup;
public characterID = this.characterService.characterData.id;
public newCharacter = this.characterService.characterData;
  constructor(private formBuilder: FormBuilder, private characterService: CharactersService, private router: Router) { }

  ngOnInit(): void {
    this.characterService.clearForm();
    this.characterForm = this.formBuilder.group({
      name: [this.newCharacter.name, [Validators.required, Validators.minLength(1)]],
      status: [this.newCharacter.status, [Validators.required, Validators.minLength(1)]],
      type: [this.newCharacter.type, [Validators.required, Validators.minLength(1)]],
      gender: [this.newCharacter.gender, [Validators.required, Validators.minLength(1)]],
      origin: [this.newCharacter.origin.name, [Validators.required, Validators.minLength(1)]],
      location: [this.newCharacter.location.name, [Validators.required, Validators.minLength(1)]],
      image: [this.newCharacter.image, [Validators.required]],
    });
    this.characterForm.valueChanges.subscribe((changes) => {
      this.newCharacter = changes;
    })
  }

  public onSubmit() {
    if(this.characterID !== "") {
      this.characterService.putCharacter(this.characterID, this.newCharacter).subscribe();
      Swal.fire("Character modified");
    } else {
      this.characterService.postCharacter(this.newCharacter).subscribe();
      Swal.fire("Character saved");
    }
    setTimeout(() => {
      this.characterForm.reset();
      this.router.navigate(["/creations"])
    }, 300)
  }

}

