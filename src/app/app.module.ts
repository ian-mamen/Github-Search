import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import{RouterModule,Routes} from '@angular/router';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'about', component: AboutComponent},
  {path:  '', redirectTo: '/user', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { UserRequestService } from './user-request.service';
import {RoutingModule} from './routing-module';
import { Highlight } from './highlight';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent,
    UserComponent,
    Highlight
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
