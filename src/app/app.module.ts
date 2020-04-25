import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './Services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthService } from './Services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourFourComponent } from './four-four/four-four.component';
import {AuthGuard} from './Services/auth-guard.service';
import { AjoutAppareilComponent } from './ajout-appareil/ajout-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './Services/user.service';
import { AjoutUserComponent } from './ajout-user/ajout-user.component';
import { from } from 'rxjs';
export const routes: Routes = [
{
  path : 'appareil' , canActivate: [AuthGuard], component: AppareilViewComponent
},
{
path: 'appareil/:id', canActivate: [AuthGuard], component: SingleAppareilComponent
},
{
path: 'edit', canActivate: [AuthGuard], component:AjoutAppareilComponent
},
{
  path: 'user', component: UserListComponent
},
{
  path: 'AddUSer', component: AjoutUserComponent
},
{
  path : 'login' , component: AuthComponent
},
{
  path : '' , component: AuthComponent
},
{
  path: '404', component: FourFourComponent
},
//dima fel lekher ki tekteb ay url bch yoghletch
{
  path: '**', redirectTo: '/404'
}
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourFourComponent,
    AjoutAppareilComponent,
    UserListComponent,
    AjoutUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppareilService,
    AuthGuard,
    UserService,
  AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
