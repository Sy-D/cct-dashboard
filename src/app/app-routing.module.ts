import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleguideOverviewComponent } from './component/styleguide-overview/styleguide-overview.component';
import { GeneralOverviewComponent } from './general-overview/general-overview.component';
import { MemberOverviewComponent } from './member-overview/member-overview.component';
import { ProtocolOverviewComponent } from './protocol-overview/protocol-overview.component';
import { UserOverviewComponent } from './user/user-overview/user-overview.component';

const routes: Routes = [
  { path: '', component: GeneralOverviewComponent},
  { path: 'overview', component: GeneralOverviewComponent},
  // TODO: Child Views for user when more sites available
  { path: 'user-overview', component: UserOverviewComponent},
  { path: 'styleguide', component: StyleguideOverviewComponent},
  { path: 'protocol', component: ProtocolOverviewComponent},
  { path: 'members', component: MemberOverviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
