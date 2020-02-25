import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StudentsComponent } from './components/students/students.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfessionalsComponent } from './components/professionals/professionals.component';
import { SignupComponent } from './components/signup/signup.component';



const routes: Routes = [
  { path: "home", component: HomeComponent },


  { path: "students", component: StudentsComponent },

  { path: "professionals", component: ProfessionalsComponent },

  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}