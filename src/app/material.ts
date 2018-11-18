import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatCheckboxModule, MatButtonModule],
  exports: [MatCheckboxModule, MatButtonModule],
})

export class MaterialModule {

}
