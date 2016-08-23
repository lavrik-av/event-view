import { NgModule, ModuleWithProviders }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterTextModule } from './filter-text/filter-text.module'

import { InitCapsPipe } from './init-caps.pipe';

const declarables = [
  InitCapsPipe,
];

// imports: imports the module's exports. which is usually declarables and providers
// in our case the filter-text has no providers.
//
// exports: exports modules AND components/directives/pipes that other modules may want to use
@NgModule({
  imports: [CommonModule, FilterTextModule, FormsModule],
  exports: [CommonModule, FilterTextModule, FormsModule, declarables],
  declarations: declarables,
})
export class SharedModule { }
  // static forRoot() {
  //   return {
  //     ngModule: SharedModule,
  //     providers: [
  //       FilterTextModule.forRoot().providers
  //     ]
  //   }
  // }
