import { Component } from '@angular/core';

import { ExampleController } from 'features/example/example.controller';

@Component({
  selector: 'custom-example-sub-component',
  templateUrl: './custom-example-sub.component.html',
})
export class CustomExampleSubComponent {
  constructor(
    public exampleController: ExampleController,
  ) {}
}