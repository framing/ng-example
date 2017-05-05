import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { ExampleFeature } from 'features/example/example.feature';

import { CustomExampleSubComponentViewModule } from './view/custom-example-sub-component-view.module';
import { CustomExampleSubComponent } from './view/custom-example-sub.component';

@NgModule(Framing((framing) => framing
  .import(CustomExampleSubComponentViewModule)
  .frame(new ExampleFeature()
    .view({
      exampleSubComponent: CustomExampleSubComponent,
    })
  )
))
export class CustomExampleSubComponentModule {}