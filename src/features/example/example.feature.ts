import { Type } from '@angular/core';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { ExampleController } from './example.controller';
import { ExampleModel } from './example.model';
import { ExampleView } from './example.view';

import { ExampleSubComponent } from './view/example-sub.component';
import { ExampleViewModule } from './view/example-view.module';
import { ExampleComponent } from './view/example.component';

export class ExampleFeature extends Framer<ExampleModel, ExampleView> {

  public get framerName(): string { return 'ExampleFeature'; }

  public get defaultModel(): ExampleModel {
    return {
      count: 0,
      increment: 1,
    };
  }

  public get defaultView(): ExampleView {
    return {
      exampleComponent: ExampleComponent,
      exampleSubComponent: ExampleSubComponent,
    };
  }

  public get defaultController(): Type<ExampleController> {
    return ExampleController;
  }

  public frame(framing: FramingNgModule): void {
    framing
      .import(ExampleViewModule)
      .component(this.theView.exampleComponent);
  }
}
