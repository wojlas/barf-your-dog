import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MeatSelectionComponent } from './main-dashboard/meat-selection/meat-selection.component';
import { DropdownComponent } from './global/dropdown/dropdown.component';
import { SelectedListComponent } from './main-dashboard/selected-list/selected-list.component';
import { SelectSupliesComponent } from './main-dashboard/select-suplies/select-suplies.component';
import { FinalResultsComponent } from './main-dashboard/final-results/final-results.component';
import { WarningDialogComponent } from './global/warning-dialog/warning-dialog.component';
import { SetWeightComponent } from './global/set-weight/set-weight.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DogInfoComponent } from './main-dashboard/dog-info/dog-info.component';
import { MeatPercentComponent } from './main-dashboard/meat-percent/meat-percent.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
    MeatSelectionComponent,
    DropdownComponent,
    SelectedListComponent,
    SelectSupliesComponent,
    FinalResultsComponent,
    WarningDialogComponent,
    SetWeightComponent,
    DogInfoComponent,
    MeatPercentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
