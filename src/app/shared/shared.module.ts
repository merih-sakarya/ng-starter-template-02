import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Imports ::: 3rd Party ::: Material Design Modules
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

// Imports ::: 3rd Party ::: Other Modules
import { FlexLayoutModule } from '@angular/flex-layout';

// Imports ::: Shared Components

// Imports ::: Pips

const MATERIALMODULS = [
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatDividerModule
];

const THIRDMODULES = [
  FlexLayoutModule,
  ...MATERIALMODULS
];

// Components & directives
const COMPONENTS: any[] = [];

const DIRECTIVES: any[] = [];
// End Components & directives

// Pipes
const PIPES: any[] = [];
// End Pipes

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // third libs
    ...THIRDMODULES
  ],
  declarations: [
    // components and directives
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // third libs
    ...THIRDMODULES,
    // components and directives
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule {}
