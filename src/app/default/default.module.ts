import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { ExampleFeature } from 'features/example/example.feature';

@NgModule(Framing((framing) => framing
  .frame(new ExampleFeature())
))
export class DefaultModule {}