import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { ExampleFeature } from 'features/example/example.feature';

import { CustomExampleComponentViewModule } from './view/custom-example-component-view.module';
import { CustomExampleComponent } from './view/custom-example.component';

@NgModule(Framing((framing) => framing
  .import(CustomExampleComponentViewModule)
  .frame(new ExampleFeature()
    .view({
      exampleComponent: CustomExampleComponent,
    }),
  ),
))
export class CustomExampleComponentModule {}
