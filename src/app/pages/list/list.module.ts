import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatPaginatorModule} from '@angular/material/paginator'

const modules = [
    CommonModule,
    FormsModule,
    ListRoutingModule,
    SharedModule,
    MatPaginatorModule
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