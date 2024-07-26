import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_mVCScUyhH',
      userPoolClientId: '24gpd336tlp3a2htsdvbgupd94',
    },
  },
});

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, RouterModule, AmplifyAuthenticatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
