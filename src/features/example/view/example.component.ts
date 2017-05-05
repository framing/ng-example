import { Component } from '@angular/core';

import { ExampleController } from '../example.controller';

@Component({
  selector: 'example-component',
  templateUrl: './example-component.component.html',
})
export class ExampleComponent {
  constructor(
    public exampleController: ExampleController,
  ) {}
}