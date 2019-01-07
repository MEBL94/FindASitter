import { SittersListComponent } from './sitters-list/sitters-list.component';
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { PortalComponent } from './portal/portal.component';
import { RegisterComponent } from './register/register.component';
import { BabiesListComponent } from './babies-list/babies-list.component';

const routes: Routes = [  {
  path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'portal', component: PortalComponent, canActivate: [AuthGuard], children:
    [
      {path: 'findasitter', component: SittersListComponent},
      {path: 'findababy', component: BabiesListComponent}
      // {path: 'findasitter/:id', component: EditSitterComponent},
    ]
  },

  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
