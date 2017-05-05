import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';
import { AppFramer } from '@framing/ng-tasknas-framers';

@NgModule(Framing((framing) => framing
  .frame(
    new AppFramer({
      title: 'Framing Example',
      sideNavItems: [
        {
          label: 'Default',
          routerLink: '/default',
        },
        {
          label: 'Custom Example Component',
          routerLink: '/custom-example-component',
        },
        {
          label: 'Custom Example Sub Component',
          routerLink: '/custom-example-sub-component',
        },
        {
          label: 'Custom Submit Handler',
          routerLink: '/custom-submit-handler',
        },
        {
          label: 'Dynamic Increment',
          routerLink: '/dynamic-increment',
        },
      ],
    }),
  )
  .route({}, {
    forRoot: true,
    extraRootRouterOptions: {
      enableTracing: true,
      useHash: true,
    },
  })
  .children([
    { path: '', pathMatch: 'full', redirectTo: 'default' },
    { path: 'custom-example-component', loadChildren: './custom-example-component/custom-example-component.module#CustomExampleComponentModule' },
    { path: 'custom-example-sub-component', loadChildren: './custom-example-sub-component/custom-example-sub-component.module#CustomExampleSubComponentModule' },
    { path: 'custom-submit-handler', loadChildren: './custom-submit-handler/custom-submit-handler.module#CustomSubmitHandlerModule' },
    { path: 'default', loadChildren: './default/default.module#DefaultModule' },
    { path: 'dynamic-increment', loadChildren: './dynamic-increment/dynamic-increment.module#DynamicIncrementModule' },
  ]),
))
export class AppModule {}
