import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

@NgModule(Framing((framing) => framing
  .declarationsAndEntryComponents([
    ExampleComponent,
    ExampleSubComponent,
  ])
))
export class ExampleViewModule {}