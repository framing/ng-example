import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { ExampleSubComponent } from './example-sub.component';
import { ExampleComponent } from './example.component';

@NgModule(Framing((framing) => framing
  .declarationsAndEntryComponents([
    ExampleComponent,
    ExampleSubComponent,
  ]),
))
export class ExampleViewModule {}
