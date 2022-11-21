import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationsDetailComponent } from './creations-detail.component';
import { CreationsDetailRoutingModule} from './creations-detail-routing.module';
import {MatButtonModule} from '@angular/material/button'

const modules = [
  CommonModule, CreationsDetailRoutingModule, MatButtonModule
]

@NgModule({
  declarations: [CreationsDetailComponent],
  imports: [...modules],
})
export class CreationsDetailModule {}
