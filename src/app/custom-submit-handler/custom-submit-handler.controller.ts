import { Injectable } from '@angular/core';

import { ExampleController } from 'features/example/example.controller';

@Injectable()
export class CustomSubmitHandlerController extends ExampleController {
  public submit(): void {
    window.alert('Custom alert!');
  }
}
