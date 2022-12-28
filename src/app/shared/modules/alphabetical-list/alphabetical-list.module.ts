import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { AlphabeticalListComponent } from './alphabetical-list.component';

@NgModule({
    declarations: [
        AlphabeticalListComponent
    ],
    imports: [
        CommonModule,
        MatListModule
    ],
    exports: [
        AlphabeticalListComponent
    ]
})
export class AlphabeticalListModule {}
