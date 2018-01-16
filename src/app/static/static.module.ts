import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import {MatGridListModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [SharedModule, StaticRoutingModule, MatGridListModule, NgbModule.forRoot()],
  declarations: [AboutComponent, FeaturesComponent]
})
export class StaticModule {}
