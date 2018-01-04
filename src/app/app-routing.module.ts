import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParticipantsComponent} from './participants/participants.component';
import {DrawingComponent} from './drawing/drawing.component';

const routes: Routes = [
  {path: '', redirectTo: '/Participants', pathMatch: 'full'},
  {path: 'Participants', component: ParticipantsComponent},
  {path: 'Drawing', component: DrawingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
