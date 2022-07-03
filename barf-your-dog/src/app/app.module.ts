import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MeatSelectionComponent } from './main-dashboard/meat-selection/meat-selection.component';
import { DropdownComponent } from './global/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
    MeatSelectionComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
