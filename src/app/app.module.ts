import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './component/topbar/topbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { GeneralOverviewComponent } from './general-overview/general-overview.component';
import { UserOverviewComponent } from './user/user-overview/user-overview.component';
import { ProjectsOverviewComponent } from './component/projects-overview/projects-overview.component';
import { TrainingOverviewComponent } from './component/training-overview/training-overview.component';
import { EventOverviewComponent } from './component/event-overview/event-overview.component';
import { StyleguideOverviewComponent } from './component/styleguide-overview/styleguide-overview.component';
import { MemberOverviewComponent } from './member-overview/member-overview.component';
import { ProtocolOverviewComponent } from './protocol-overview/protocol-overview.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    GeneralOverviewComponent,
    UserOverviewComponent,
    ProjectsOverviewComponent,
    TrainingOverviewComponent,
    EventOverviewComponent,
    StyleguideOverviewComponent,
    MemberOverviewComponent,
    ProtocolOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
