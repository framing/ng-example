import { Component } from '@angular/core';

import { ExampleController } from '../example.controller';

@Component({
  selector: 'example-sub-component',
  templateUrl: './example-sub.component.html',
})
export class ExampleSubComponent {
  constructor(
    public exampleController: ExampleController,
  ) {}
}
