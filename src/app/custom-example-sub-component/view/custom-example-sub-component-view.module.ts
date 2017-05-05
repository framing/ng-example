import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { CustomExampleSubComponent } from './custom-example-sub.component';

@NgModule(Framing((framing) => framing
  .declareAndEntryComponent(CustomExampleSubComponent),
))
export class CustomExampleSubComponentViewModule {}
