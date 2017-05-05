import { Injectable } from '@angular/core';
import { Controller } from '@framing/ng-core';

import { ExampleModel } from './example.model';
import { ExampleView } from './example.view';

@Injectable()
export class ExampleController extends Controller<ExampleModel, ExampleView> {
  public submit(): void {
    this.model.count += this.model.increment;
  }
}
