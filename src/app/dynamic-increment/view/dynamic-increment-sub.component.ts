import { Component } from '@angular/core';

import { ExampleController } from 'features/example/example.controller';

@Component({
  selector: 'dynamic-increment-sub-component',
  templateUrl: './dynamic-increment-sub.component.html',
})
export class DynamicIncrementSubComponent {
  constructor(
    public exampleController: ExampleController,
  ) {}
}