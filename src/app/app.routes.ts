import { Routes, RouterModule } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { CreateidComponent } from './createid/createid.component';
import { NgModule } from '@angular/core';
import { CreateroomComponent } from './createroom/createroom.component';
import { JoinroomComponent } from './joinroom/joinroom.component';
import { WaitingroomComponent } from './waitingroom/waitingroom.component';
import { ChatroomComponent } from './chatroom/chatroom.component';

export const routes: Routes = [
  { path: '', component: FirstpageComponent },
  { path: 'createid', component: CreateidComponent },
  { path: 'createroom', component: CreateroomComponent },
  { path: 'waitingroom', component: WaitingroomComponent },
  { path: 'joinroom', component: JoinroomComponent },
  { path: 'chatroom', component: ChatroomComponent },
  // Add any other routes as needed
  { path: '', redirectTo: '/createroom', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
  // Add more routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
