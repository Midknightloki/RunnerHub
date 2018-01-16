import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
         MatFormFieldModule, MatInputModule, MatAutocompleteModule, 
         MatRadioModule, MatSelectModule, MatSliderModule, 
         MatSlideToggleModule, MatMenuModule, MatSidenavModule, 
         MatToolbarModule, MatListModule, MatGridListModule, 
         MatStepperModule, MatTabsModule, MatExpansionModule, 
         MatButtonToggleModule, MatIconModule, MatProgressSpinnerModule, 
         MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule, } from '@angular/material';

import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dice } from 'dicelang';
import * as hammer from 'hammerjs';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    
    // material controls
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    
    // material nav
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    
    // material layout
    MatListModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,

    // core & shared
    CoreModule,
    SharedModule,

    // features
    StaticModule,
    SettingsModule,

    // app
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
