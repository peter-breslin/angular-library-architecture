import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a/a.component';



@NgModule({
  declarations: [
    AComponent
  ],
  imports: [
    CommonModule
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
