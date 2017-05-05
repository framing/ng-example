import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { ExampleFeature } from 'features/example/example.feature';

import { CustomSubmitHandlerController } from './custom-submit-handler.controller';

@NgModule(Framing((framing) => framing
  .frame(new ExampleFeature()
    .controller(CustomSubmitHandlerController),
  ),
))
export class CustomSubmitHandlerModule {}
