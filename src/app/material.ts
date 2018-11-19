import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  imports: [MatCheckboxModule, MatButtonModule, MatToolbarModule],
  exports: [MatCheckboxModule, MatButtonModule, MatToolbarModule],
})

export class MaterialModule {

}
