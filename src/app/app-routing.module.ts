import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  { path: 'login',      component: LoginComponent},
  { path: 'aboutus', component: AboutusComponent},
  {path:'students', component:StudentsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}