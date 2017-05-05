import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { ExampleFeature } from 'features/example/example.feature';

import { DynamicIntervalViewModule } from './view/dynamic-interval-view.module';
import { DynamicIntervalSubComponent } from './view/dynamic-interval-sub.component';

@NgModule(Framing((framing) => framing
  .import(DynamicIntervalViewModule)
  .frame(new ExampleFeature()
    .view({
      exampleSubComponent: DynamicIntervalSubComponent,
    })
  )
))
export class DynamicIntervalModule {}