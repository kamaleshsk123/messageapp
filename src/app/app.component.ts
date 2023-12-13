import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { CreateidComponent } from './createid/createid.component';
import { JoinroomComponent } from './joinroom/joinroom.component';
import { CreateroomComponent } from './createroom/createroom.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    FirstpageComponent,
    CreateidComponent,
    JoinroomComponent,
    CreateroomComponent,
    ChatroomComponent,
    FormsModule,
  ],
})
export class AppComponent {
  title = 'trail';
}
