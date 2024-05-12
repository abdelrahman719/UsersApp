import { ApplicationConfig, isDevMode } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';


import {  provideHttpClient } from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations'
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import * as appState from '../app/Store/app.state';
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { UsersListComponent } from './Features/users-list/users-list.component';
import { UserProfileComponent } from './Features/user-profile/user-profile.component';


const routes: Routes = [
  { path: '', component: UsersListComponent },

  {
    path: 'profile/:id', component: UserProfileComponent,
  },
  { path: '**', component: UsersListComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideRouterStore(),
    provideStore(appState.appState),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
