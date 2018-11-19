import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  imports: [MatCheckboxModule, MatButtonModule, MatToolbarModule, MatIconModule],
  exports: [MatCheckboxModule, MatButtonModule, MatToolbarModule, MatIconModule],
})

export class MaterialModule {

}
