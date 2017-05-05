import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { ExampleFeature } from 'features/example/example.feature';

import { DynamicIncrementSubComponent } from './view/dynamic-increment-sub.component';
import { DynamicIncrementViewModule } from './view/dynamic-increment-view.module';

@NgModule(Framing((framing) => framing
  .import(DynamicIncrementViewModule)
  .frame(new ExampleFeature()
    .view({
      exampleSubComponent: DynamicIncrementSubComponent,
    }),
  ),
))
export class DynamicIncrementModule {}
