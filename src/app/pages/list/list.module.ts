import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

const modules = [
    CommonModule,
    FormsModule,
    ListRoutingModule,
    SharedModule,
    MatButtonModule
]

@NgModule({
    declarations: [
        ListComponent,
        CardComponent
    ],
    imports: [
        ...modules
    ]
})
export class ListModule {}