import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

@NgModule(Framing((framing) => framing
  .declareAndEntryComponent(CustomExampleComponent)
))
export class CustomExampleComponentViewModule {}