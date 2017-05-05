import { Type } from '@angular/core';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { ExampleController } from './example.controller';
import { ExampleModel } from './example.model';
import { ExampleView } from './example.view';

import { ExampleViewModule } from './view/example-view.module';
import { ExampleComponent } from './view/example.component';
import { ExampleSubComponent } from './view/example-sub.component';

export class ExampleFeature extends Framer<ExampleModel, ExampleView, ExampleController> {

  public get framerName(): string { return 'ExampleFeature'; }

  public get defaultModel(): ExampleModel {
    return {
      count: 0,
      interval: 1,
    };
  }

  public get defaultView(): ExampleView {
    return {
      exampleSubComponent: ExampleSubComponent,
      exampleComponent: ExampleComponent,
    };
  }

  public get defaultController(): Type<ExampleControler> {
    return ExampleController;
  }

  public frame(framing: FramingNgModule): void {
    framing
      .import(ExampleViewModule)
      .component(ExampleComponent);
  }
}