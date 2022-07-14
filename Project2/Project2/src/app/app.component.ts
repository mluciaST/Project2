import { Component } from '@angular/core';
import { GoogleApiService, UserInfo } from './google-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInfo?: UserInfo
  title = 'Project2';
  constructor(private readonly googleApi: GoogleApiService){
    googleApi.userProfileSubject.subscribe((info: UserInfo | undefined) => {
      this.userInfo = info
    })
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }

  signOut() {
    this.googleApi.signOut()
  }
}
