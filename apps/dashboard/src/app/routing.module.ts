import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from '@workshop/core-data';
import { LoginComponent } from '@workshop/ui-login';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { LessonsComponent } from './lessons/lessons.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'lessons', component: LessonsComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
