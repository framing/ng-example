import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Framing } from '@framing/ng-core';

import { DynamicIncrementSubComponent } from './dynamic-increment-sub.component';

@NgModule(Framing((framing) => framing
  .import(FormsModule)
  .declareAndEntryComponent(DynamicIncrementSubComponent),
))
export class DynamicIncrementViewModule {}
