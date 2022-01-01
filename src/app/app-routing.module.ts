import { UserDetailsComponent } from './user-details/user-details.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authgaurd.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'userDetails',
    component: UserDetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
  }, // only accessible if authorised
  { path: '**', component: LoginComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
