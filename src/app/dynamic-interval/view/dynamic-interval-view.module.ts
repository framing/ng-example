import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DynamicIntervalSubComponent } from './dynamic-interval-sub.component';

@NgModule(Framing((framing) => framing
  .declareAndEntryComponent(DynamicIntervalSubComponent)
))
export class DynamicIntervalViewModule {}