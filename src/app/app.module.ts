import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';
import { AppFramer } from '@framing/ng-tasknas-framers';

@NgModule(Framing((framing => framing
  .frame(
    new AppFramer({
      sideNavItems: [
        {
          title: 'Default',
          routerLink: 'default',
        },
        {
          title: 'Custom Example Component',
          routerLink: 'custom-example-component',
        },
        {
          title: 'Custom Example Sub Component',
          routerLink: 'custom-example-sub-component',
        },
        {
          title: 'Custom Submit Handler',
          routerLink: 'custom-submit-handler',
        },
        {
          title: 'Dynamic Interval',
          routerLink: 'dynamic-interval',
        },
      ],
    }),
  )
  .children([
    { path: 'custom-example-component', loadChildren: './custom-example-component/custom-example-component.module#CustomExampleComponentModule' },
    { path: 'custom-example-sub-component', loadChildren: './custom-example-sub-component/custom-example-sub-component.module#CustomExampleSubComponentModule' },
    { path: 'custom-submit-handler', loadChildren: './custom-submit-handler/custom-submit-handler.module#CustomSubmitHandlerModule' },
    { path: 'default', loadChildren: './default/default.module#DefaultModule' },
    { path: 'dynamic-interval', loadChildren: './dynamic-interval/dynamic-interval.module#DynamicIntervalModule' },
  ])
))
export class AppModule {}