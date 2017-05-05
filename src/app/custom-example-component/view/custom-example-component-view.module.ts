import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { CustomExampleComponent } from './custom-example.component';

@NgModule(Framing((framing) => framing
  .declareAndEntryComponent(CustomExampleComponent),
))
export class CustomExampleComponentViewModule {}
