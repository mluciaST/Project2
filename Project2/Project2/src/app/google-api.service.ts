import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';

const oAuthConfig: AuthConfig ={
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '102187800045-j5dtok143p23fsjsbujsc3f8vbtggs1j.apps.googleusercontent.com',
  scope: 'openid profile email'
}

export interface UserInfo {
  info: {
    sub: string,
    email: string,
    name: string,
    picture: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  userProfileSubject = new Subject<UserInfo>()
  
  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(oAuthConfig)
    oAuthService.logoutUrl = "https://www.google.com/accounts/Logout"

    oAuthService.loadDiscoveryDocument().then(()=>{
      oAuthService.tryLoginImplicitFlow().then(()=>{
        if(!oAuthService.hasValidAccessToken()){
          oAuthService.initLoginFlow()
          console.log("routing")
        } else {
          oAuthService.loadUserProfile().then((userProfile)=>{
            this.userProfileSubject.next(userProfile as UserInfo)
          })
        }
      })
    })
   }

   isLoggedIn(): boolean {
     return this.oAuthService.hasValidAccessToken()
   }

   signOut() {
     this.oAuthService.logOut()
   }
}
