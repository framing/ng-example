import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DynamicIncrementSubComponent } from './dynamic-increment-sub.component';

@NgModule(Framing((framing) => framing
  .declareAndEntryComponent(DynamicIncrementSubComponent)
))
export class DynamicIncrementViewModule {}