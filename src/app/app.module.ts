import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { NavigationComponent } from './common/navigation/navigation.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppService } from './common/app.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AuthModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
