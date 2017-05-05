import { Component } from '@angular/core';

import { ExampleController } from 'features/custom-example/custom-example.controller';

@Component({
  selector: 'custom-example-component',
  templateUrl: './custom-example.component.html',
})
export class CustomExampleComponent {
  constructor(
    public exampleController: ExampleController,
  ) {}
}