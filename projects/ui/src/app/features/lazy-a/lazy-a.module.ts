import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyARoutingModule } from './lazy-a-routing.module';
import { LazyAComponent } from './lazy-a.component';
// import { LibAModule } from 'ui-lib';


@NgModule({
  declarations: [
    LazyAComponent
  ],
  imports: [
    CommonModule,
    LazyARoutingModule
    // LibAModule
  ]
})
export class LazyAModule { }
