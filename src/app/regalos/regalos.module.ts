import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegalosRoutingModule } from './regalos-routing.module';
import { RegalosComponent } from './regalos.component';


@NgModule({
  declarations: [
    RegalosComponent
  ],
  imports: [
    CommonModule,
    RegalosRoutingModule
  ]
})
export class RegalosModule { }
