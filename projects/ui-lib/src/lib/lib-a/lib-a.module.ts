import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a/a.component';
import { LibBModule } from 'ui-lib/src/lib/lib-b';

@NgModule({
  declarations: [
    AComponent
  ],
  imports: [
    CommonModule,
    LibBModule
  ],
  exports :[AComponent]
})
export class LibAModule {

  static forRoot(configuration : any) : ModuleWithProviders<{}>{
    return {
      ngModule : LibAModule,
      providers:[AComponent, {provide:'config', useValue: configuration}]
    }
  }
}
