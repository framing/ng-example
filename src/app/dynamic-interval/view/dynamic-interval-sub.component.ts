import { Component } from '@angular/core';

import { ExampleController } from 'features/example/example.controller';

@Component({
  selector: 'dynamic-interval-sub-component',
  templateUrl: './dynamic-interval-sub.component.html',
})
export class DynamicIntervalSubComponent {
  constructor(
    public exampleController: ExampleController,
  ) {}
}