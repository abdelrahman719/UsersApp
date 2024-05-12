import { ApplicationConfig, isDevMode } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';


import {provideAnimations} from '@angular/platform-browser/animations'
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import * as appState from '../app/Store/app.state';
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { UsersListComponent } from './Features/users-list/users-list.component';
import { UserProfileComponent } from './Features/user-profile/user-profile.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { LoadingInterceptor } from './Core/interceptors/loading.interceptor';


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
  
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    },
    provideAnimations(),
    provideRouterStore(),
    provideStore(appState.appState),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  
]
};
