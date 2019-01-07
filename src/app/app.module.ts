import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PortalComponent } from './portal/portal.component';
import { SittersListComponent } from './sitters-list/sitters-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { DisplaySitterComponent } from './portal/display-sitter/display-sitter.component';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { AppState } from './store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { HttpClientModule } from '@angular/common/http';
import { rootReducer } from './store'; // Added this to get the root reducer
import {MatSelectModule} from '@angular/material/select';
import { RegisterComponent } from './register/register.component';
import { FilterSitters } from './sitters-list/sitters.filter';
import { BabiesListComponent } from './babies-list/babies-list.component';
import { FilterBabies } from './babies-list/babies.filter';
import { DisplayBabyComponent } from './portal/display-baby/display-baby.component';
import { BabyService } from './services/baby.service/baby.service';
import { SitterService } from './services/sitter.service/sitter.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    RegisterComponent,
    PageNotFoundComponent,
    PortalComponent,
    SittersListComponent,
    BabiesListComponent,
    DisplaySitterComponent,
    FilterSitters,
    FilterBabies,
    BabiesListComponent,
    DisplayBabyComponent,
    BabyService,
    SitterService
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatButtonModule,
    MatSelectModule,
    NgReduxModule, NgReduxRouterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  // Sets up redux in our application.
  constructor(private ngRedux: NgRedux<AppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter) {
      this.ngRedux.configureStore(rootReducer, {}, [],
        [ devTool.isEnabled() ? devTool.enhancer() : f => f]);
      ngReduxRouter.initialize(/* args */);
  }
 }
